import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { AppModalService } from "../services/modal.service";

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private readonly injector: Injector) { }

    handleError(error: HttpErrorResponse) {
        if (!error.status) { return; }

        switch (error.status) {
            case 401: {
                const router = this.injector.get<Router>(Router);
                router.navigate(["/login"]);
                break;
            }
            case 422: {
                const appModalService = this.injector.get<AppModalService>(AppModalService);
                appModalService.alert(error.error.message);
                break;
            }
            default: {
                console.error(error);
                break;
            }
        }
    }
}
