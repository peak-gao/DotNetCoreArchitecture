# DotNetCoreArchitecture

This project is an example of architecture with new technologies and best practices.

The goal is to share knowledge and be used for new projects.

It is not the definitive solution for all scenarios.

:star: Thanks for enjoying! :star:

## Code Analysis

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3d1ea5b1f4b745488384c744cb00d51e)](https://www.codacy.com/app/rafaelfgx/DotNetCoreArchitecture?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rafaelfgx/DotNetCoreArchitecture&amp;utm_campaign=Badge_Grade)

## Technologies

* [.NET Core 2.2.1](https://dotnet.microsoft.com/download)
* [ASP.NET Core 2.2.1](https://docs.microsoft.com/en-us/aspnet/core)
* [Entity Framework Core 2.2.2](https://docs.microsoft.com/en-us/ef/core)
* [C# 7.3](https://docs.microsoft.com/en-us/dotnet/csharp)
* [Angular 7.2.7](https://angular.io/docs)
* [Typescript 3.2.4](https://www.typescriptlang.org/docs/home.html)
* [HTML](https://www.w3schools.com/html)
* [CSS](https://www.w3schools.com/css)
* [SASS](https://sass-lang.com)
* [UIkit](https://getuikit.com/docs/introduction)
* [JWT](https://jwt.io)
* [Swagger](https://swagger.io)
* [Docker](https://docs.docker.com)

## Practices

* Clean Code
* SOLID Principles
* DDD (Domain-Driven Design)
* Code Analysis

## Recommended

<details>
<summary>Books</summary>

* **Clean Code: A Handbook of Agile Software Craftsmanship** - Robert C. Martin (Uncle Bob)
* **Clean Architecture: A Craftsman's Guide to Software Structure and Design** - Robert C. Martin (Uncle Bob)
* **Domain-Driven Design: Tackling Complexity in the Heart of Software** - Eric Evans
* **Domain-Driven Design Reference: Definitions and Pattern Summaries** - Eric Evans
* **Implementing Domain-Driven Design** - Vaughn Vernon
* **Domain-Driven Design Distilled** - Vaughn Vernon

</details>

<details>
<summary>Tools</summary>

* [Visual Studio 2017](https://visualstudio.microsoft.com/vs)
* [Visual Studio Code](https://code.visualstudio.com)
* [SQL Server 2017](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
* [Postman](https://www.getpostman.com)

</details>

<details>
<summary>Visual Studio Extensions</summary>

* [CodeMaid](https://marketplace.visualstudio.com/items?itemName=SteveCadwallader.CodeMaid)
* [Roslynator](https://marketplace.visualstudio.com/items?itemName=josefpihrt.Roslynator2017)
* [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.SonarLintforVisualStudio2017)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=vladeck.TSLint)

</details>

<details>
<summary>Visual Studio Code Extensions</summary>

* [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
* [Angular v7 Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
* [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)
* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
* [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Sort lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
* [Visual Studio Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings)
* [vscode-angular-html](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)

</details>

## Run

<details>
<summary>Command Line</summary>

1. Install latest [.NET Core SDK](https://aka.ms/dotnet-download).

2. Open directory **source\Web\Frontend** in command line and execute **npm run restore**.

3. Open directory **source\Web** in command line and execute **dotnet run**.

4. Open <https://localhost:8090>.

</details>

<details>
<summary>Visual Studio Code</summary>

1. Install latest [.NET Core SDK](https://aka.ms/dotnet-download).

2. Install [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp).

3. Open directory **source\Web\Frontend** in command line and execute **npm run restore**.

4. Open **source** directory in Visual Studio Code.

5. Press **F5**.

</details>

<details>
<summary>Visual Studio 2017</summary>

1. Install latest [.NET Core SDK](https://aka.ms/dotnet-download).

2. Open directory **source\Web\Frontend** in command line and execute **npm run restore**.

3. Open **source\DotNetCoreArchitecture.sln** in Visual Studio.

4. Set **DotNetCoreArchitecture.Web** as startup project.

5. Press **F5**.

</details>

<details>
<summary>Docker</summary>

1. Install and configure [Docker](https://www.docker.com/get-started).

2. Execute **docker-compose up --build -d --force-recreate** in root directory.

3. Open <http://localhost:8095>.

</details>

## Nuget Packages

Packages were created to make this architecture clean of common features to any solution.

**Source:** [https://github.com/rafaelfgx/DotNetCore](https://github.com/rafaelfgx/DotNetCore)

**Published:** [https://www.nuget.org/profiles/rafaelfgx](https://www.nuget.org/profiles/rafaelfgx)

## Layers

**Web:** This layer contains the api (ASP.NET Core) and the frontend (Angular).

**IoC:** This layer provides inversion of control registering services.

**CrossCutting:** This layer provides generic features for other layers.

**Application:** This layer is responsible for flow control. It does not contain business rules or domain logic.

**Domain:** This layer contains business rules and domain logic.

**Model:** This layer is responsible for modeling objects such as entities, models and enums.

**Database:** This layer isolates and abstracts the data persistence.

## Web

### ASP.NET Core

#### Swagger

View the documentation generated by swagger:

<https://localhost:8090/swagger>

#### Startup

The **Startup** class is responsible for configuring the application's pipeline.

```csharp
public class Startup
{
    public Startup(IHostingEnvironment environment)
    {
        Configuration = environment.Configuration();
        Environment = environment;
    }

    private IConfiguration Configuration { get; }

    private IHostingEnvironment Environment { get; }

    public void Configure(IApplicationBuilder application)
    {
        application.UseExceptionDefault(Environment);
        application.UseCorsDefault();
        application.UseHstsDefault(Environment);
        application.UseHttpsRedirection();
        application.UseAuthentication();
        application.UseResponseCompression();
        application.UseResponseCaching();
        application.UseStaticFiles();
        application.UseMvcWithDefaultRoute();
        application.UseHealthChecks("/health");
        application.UseSwaggerDefault();
        application.UseSpaStaticFiles();
        application.UseSpaAngularServer(Environment, "Frontend", "serve");
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddDependencyInjection(Configuration);
        services.AddCors();
        services.AddAuthenticationDefault();
        services.AddResponseCompression();
        services.AddResponseCaching();
        services.AddMvcDefault();
        services.AddHealthChecks();
        services.AddSwaggerDefault();
        services.AddSpaStaticFiles("Frontend/dist");
    }
}
```

#### Controller

The **Controller** class is responsible for receiving and responding to requests.

```csharp
[ApiController]
[RouteController]
public class UsersController : ControllerBase
{
    public UsersController(IUserService userService)
    {
        UserService = userService;
    }

    private IUserService UserService { get; }

    [HttpPost]
    public async Task<IActionResult> AddAsync(AddUserModel addUserModel)
    {
        var result = await UserService.AddAsync(addUserModel);

        return new ActionIResult(result);
    }

    [HttpDelete("{userId}")]
    public async Task<IActionResult> DeleteAsync(long userId)
    {
        var result = await UserService.DeleteAsync(userId);

        return new ActionIResult(result);
    }

    [HttpGet]
    public async Task<IEnumerable<UserModel>> ListAsync()
    {
        return await UserService.ListAsync();
    }

    [HttpGet("{userId}")]
    public async Task<UserModel> SelectAsync(long userId)
    {
        return await UserService.SelectAsync(userId);
    }

    [AllowAnonymous]
    [HttpPost("SignIn")]
    public async Task<IActionResult> SignInAsync(SignInModel signInModel)
    {
        var result = await UserService.SignInJwtAsync(signInModel);

        return new ActionIResult(result);
    }

    [HttpPost("SignOut")]
    public Task SignOutAsync()
    {
        var signOutModel = new SignOutModel(User.Id());

        return UserService.SignOutAsync(signOutModel);
    }

    [HttpPut("{userId}")]
    public async Task<IActionResult> UpdateAsync(long userId, UpdateUserModel updateUserModel)
    {
        updateUserModel.UserId = userId;

        var result = await UserService.UpdateAsync(updateUserModel);

        return new ActionIResult(result);
    }
}
```

### Angular

#### Component

The **Component** class is responsible for being a part of the application.

```typescript
@Component({ selector: "app-login", templateUrl: "./login.component.html" })
export class AppLoginComponent {
    signInModel = new SignInModel();

    constructor(private readonly appAuthenticationService: AppAuthenticationService) { }

    ngSubmit() {
        this.appAuthenticationService.signIn(this.signInModel);
    }
}
```

#### Model

The **Model** class is responsible for containing a set of data.

```typescript
export class SignInModel {
    login: string | undefined;
    password: string | undefined;
}
```

#### Service

The **Service** class is responsible for accessing api or containing logic that does not belong to a component.

```typescript
@Injectable({ providedIn: "root" })
export class AppUserService {
    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly appTokenService: AppTokenService) { }

    add(userModel: UserModel) {
        return this.http.post(`Users`, userModel);
    }

    delete(userId: number) {
        return this.http.delete(`Users/${userId}`);
    }

    list() {
        return this.http.get(`Users`);
    }

    select(userId: number) {
        return this.http.get(`Users/${userId}`);
    }

    signIn(signInModel: SignInModel): void {
        this.http
            .post<ResultModel<TokenModel>>(`Users/SignIn`, signInModel)
            .subscribe((resultModel) => {
                if (resultModel.data && resultModel.data.token) {
                    this.appTokenService.set(resultModel.data.token);
                    this.router.navigate(["/main/home"]);
                }
            });
    }

    signOut() {
        if (this.appTokenService.any()) {
            this.http.post(`Users/SignOut`, {}).subscribe();
        }

        this.appTokenService.clear();
        this.router.navigate(["/login"]);
    }

    update(userModel: UserModel) {
        return this.http.put(`Users/${userModel.userId}`, userModel);
    }
}
```

#### Guard

The **Guard** class is responsible for route security.

```typescript
@Injectable()
export class AppGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly appTokenService: AppTokenService) { }

    canActivate() {
        if (this.appTokenService.any()) { return true; }
        this.router.navigate(["/login"]);
        return false;
    }
}
```

#### Error Handler

The **ErrorHandler** class is responsible for centralizing the management of all errors and exceptions.

```typescript
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
```

#### HTTP Interceptor

The **HttpInterceptor** class is responsible for intercepting the request and the response to perform some logic, such as adding the JWT token in the header for every request.

```typescript
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private readonly appTokenService: AppTokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${this.appTokenService.get()}` }
        });

        return next.handle(request);
    }
}
```

## IoC

#### ServiceCollectionExtensions

The **ServiceCollectionExtensions** class is responsible for registering and configuring services for dependency injection.

```csharp
public static class ServiceCollectionExtensions
{
    public static void AddDependencyInjection(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHash();
        services.AddLogger(configuration);
        services.AddJsonWebToken(Guid.NewGuid().ToString(), TimeSpan.FromHours(12));

        services.AddDbContextMigrate<DatabaseContext>(options => options
            .UseSqlServer(configuration.GetConnectionString(nameof(DatabaseContext)))
            .ConfigureWarnings(warnings => warnings.Throw(RelationalEventId.QueryClientEvaluationWarning))
        );

        services.AddMatchingInterfaceOrSelf
        (
            typeof(IUserService).Assembly,
            typeof(IUserDomainService).Assembly,
            typeof(IDatabaseUnitOfWork).Assembly
        );
    }
}
```

## Application

#### Service

The **Service** class is responsible for flow control. It uses validator, factory, domain, repository and unit of work, but does not contain business rules or domain logic.

```csharp
public sealed class UserService : IUserService
{
    public UserService
    (
        IDatabaseUnitOfWork databaseUnitOfWork,
        IUserDomainService userDomainService,
        IUserLogService userLogService,
        IUserRepository userRepository
    )
    {
        DatabaseUnitOfWork = databaseUnitOfWork;
        UserDomainService = userDomainService;
        UserLogService = userLogService;
        UserRepository = userRepository;
    }

    private IDatabaseUnitOfWork DatabaseUnitOfWork { get; }

    private IUserDomainService UserDomainService { get; }

    private IUserLogService UserLogService { get; }

    private IUserRepository UserRepository { get; }

    public async Task<IDataResult<long>> AddAsync(AddUserModel addUserModel)
    {
        var validation = new AddUserModelValidator().Valid(addUserModel);

        if (!validation.Success)
        {
            return new ErrorDataResult<long>(validation.Message);
        }

        addUserModel.Login = UserDomainService.GenerateHash(addUserModel.Login);

        addUserModel.Password = UserDomainService.GenerateHash(addUserModel.Password);

        var userDomain = UserDomainFactory.Create(addUserModel);

        userDomain.Add();

        var userEntity = userDomain.Map<UserEntity>();

        await UserRepository.AddAsync(userEntity);

        await DatabaseUnitOfWork.SaveChangesAsync();

        return new SuccessDataResult<long>(userEntity.UserId);
    }

    public async Task<IResult> DeleteAsync(long userId)
    {
        await UserRepository.DeleteAsync(userId);

        await DatabaseUnitOfWork.SaveChangesAsync();

        return new SuccessResult();
    }

    public async Task<PagedList<UserModel>> ListAsync(PagedListParameters parameters)
    {
        return await UserRepository.ListAsync<UserModel>(parameters);
    }

    public async Task<IEnumerable<UserModel>> ListAsync()
    {
        return await UserRepository.ListAsync<UserModel>();
    }

    public async Task<UserModel> SelectAsync(long userId)
    {
        return await UserRepository.SelectAsync<UserModel>(userId);
    }

    public async Task<IDataResult<SignedInModel>> SignInAsync(SignInModel signInModel)
    {
        var validation = new SignInModelValidator().Valid(signInModel);

        if (!validation.Success)
        {
            return new ErrorDataResult<SignedInModel>(validation.Message);
        }

        signInModel.Login = UserDomainService.GenerateHash(signInModel.Login);

        signInModel.Password = UserDomainService.GenerateHash(signInModel.Password);

        var signedInModel = await UserRepository.SignInAsync(signInModel);

        validation = new SignedInModelValidator().Valid(signedInModel);

        if (!validation.Success)
        {
            return new ErrorDataResult<SignedInModel>(validation.Message);
        }

        await AddUserLogAsync(signedInModel.UserId, LogType.SignIn).ConfigureAwait(false);

        return new SuccessDataResult<SignedInModel>(signedInModel);
    }

    public async Task<IDataResult<TokenModel>> SignInJwtAsync(SignInModel signInModel)
    {
        var result = await SignInAsync(signInModel).ConfigureAwait(false);

        if (!result.Success)
        {
            return new ErrorDataResult<TokenModel>(result.Message);
        }

        var token = UserDomainService.GenerateToken(result.Data);

        var tokenModel = new TokenModel(token);

        return new SuccessDataResult<TokenModel>(tokenModel);
    }

    public async Task SignOutAsync(SignOutModel signOutModel)
    {
        await AddUserLogAsync(signOutModel.UserId, LogType.SignOut).ConfigureAwait(false);
    }

    public async Task<IResult> UpdateAsync(UpdateUserModel updateUserModel)
    {
        var validation = new UpdateUserModelValidator().Valid(updateUserModel);

        if (!validation.Success)
        {
            return new ErrorResult(validation.Message);
        }

        var userEntity = await UserRepository.SelectAsync(updateUserModel.UserId);

        var userDomain = UserDomainFactory.Create(userEntity);

        userDomain.Update(updateUserModel);

        userEntity = userDomain.Map<UserEntity>();

        await UserRepository.UpdateAsync(userEntity, userEntity.UserId);

        await DatabaseUnitOfWork.SaveChangesAsync();

        return new SuccessResult();
    }

    private async Task AddUserLogAsync(long userId, LogType logType)
    {
        var userLogModel = new UserLogModel(userId, logType);

        await UserLogService.AddAsync(userLogModel);
    }
}
```

## Domain

#### Domain

The **Domain** class is responsible for business rules and domain logic.

```csharp
public class UserDomain
{
    protected internal UserDomain(string login, string password)
    {
        Login = login;
        Password = password;
    }

    protected internal UserDomain(long userId, Roles roles)
    {
        UserId = userId;
        Roles = roles;
    }

    protected internal UserDomain
    (
        long userId,
        string name,
        string surname,
        string email,
        string login,
        string password,
        Roles roles
    )
    {
        UserId = userId;
        Name = name;
        Surname = surname;
        Email = email;
        Login = login;
        Password = password;
        Roles = roles;
    }

    public string Email { get; private set; }

    public string Login { get; private set; }

    public string Name { get; private set; }

    public string Password { get; private set; }

    public Roles Roles { get; private set; }

    public Status Status { get; private set; }

    public string Surname { get; private set; }

    public long UserId { get; private set; }

    public void Add()
    {
        Roles = Roles.User;
        Status = Status.Active;
    }

    public void Update(UpdateUserModel updateUserModel)
    {
        Name = updateUserModel.Name;
        Surname = updateUserModel.Surname;
        Email = updateUserModel.Email;
    }
}
```

#### Domain Factory

The **DomainFactory** class is responsible for creating a domain object.

```csharp
public static class UserDomainFactory
{
    public static UserDomain Create(AddUserModel addUserModel)
    {
        return new UserDomain
        (
            addUserModel.UserId,
            addUserModel.Name,
            addUserModel.Surname,
            addUserModel.Email,
            addUserModel.Login,
            addUserModel.Password,
            addUserModel.Roles
        );
    }

    public static UserDomain Create(UpdateUserModel updateUserModel)
    {
        return new UserDomain
        (
            updateUserModel.UserId,
            updateUserModel.Name,
            updateUserModel.Surname,
            updateUserModel.Email,
            null,
            null,
            updateUserModel.Roles
        );
    }

    public static UserDomain Create(UserEntity userEntity)
    {
        return new UserDomain
        (
            userEntity.UserId,
            userEntity.Name,
            userEntity.Surname,
            userEntity.Email,
            userEntity.Login,
            userEntity.Password,
            userEntity.Roles
        );
    }

    public static UserDomain Create(SignInModel signInModel)
    {
        return new UserDomain
        (
            signInModel.Login,
            signInModel.Password
        );
    }

    public static UserDomain Create(SignedInModel signedInModel)
    {
        return new UserDomain
        (
            signedInModel.UserId,
            signedInModel.Roles
        );
    }
}
```

#### Domain Service

The **DomainService** class is responsible for encapsulating domain logic that doesn't fit within the domain object.

```csharp
public class UserDomainService : IUserDomainService
{
    public UserDomainService
    (
        IHash hash,
        IJsonWebToken jsonWebToken
    )
    {
        Hash = hash;
        JsonWebToken = jsonWebToken;
    }

    private IHash Hash { get; }

    private IJsonWebToken JsonWebToken { get; }

    public string GenerateHash(string text)
    {
        return Hash.Create(text);
    }

    public string GenerateToken(SignedInModel signedInModel)
    {
        var claims = new List<Claim>();
        claims.AddSub(signedInModel.UserId.ToString());
        claims.AddRoles(signedInModel.Roles.ToString().Split(", "));

        return JsonWebToken.Encode(claims);
    }
}
```

## Model

#### Entity

The **Entity** class is responsible for containing properties of an object with identity.

```csharp
public class UserEntity
{
    public long UserId { get; set; }

    public string Name { get; set; }

    public string Surname { get; set; }

    public string Email { get; set; }

    public string Login { get; set; }

    public string Password { get; set; }

    public Roles Roles { get; set; }

    public Status Status { get; set; }

    public virtual ICollection<UserLogEntity> UsersLogs { get; set; }
}
```

#### Model

The **Model** class is responsible for containing a set of data.

```csharp
public class SignedInModel
{
    public long UserId { get; set; }

    public Roles Roles { get; set; }
}
```

#### Model Validator

The **ModelValidator** class is responsible for validating a model with defined rules.

```csharp
public sealed class SignedInModelValidator : Validator<SignedInModel>
{
    public SignedInModelValidator()
    {
        RuleFor(x => x).NotNull();
        RuleFor(x => x.UserId).NotNull().NotEmpty().GreaterThan(0);
        RuleFor(x => x.Roles).NotNull().NotEmpty().NotEqual(Roles.None);
    }
}
```

## Database

#### Context

The **Context** class is responsible for configuring and mapping the database.

```csharp
public sealed class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly();
    }
}
```

#### Context Factory

The **ContextFactory** class is responsible for generating migrations.

```csharp
public sealed class DatabaseContextFactory : IDesignTimeDbContextFactory<DatabaseContext>
{
    public DatabaseContext CreateDbContext(string[] args)
    {
        const string connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=Database;Integrated Security=true;Connection Timeout=5;";

        var builder = new DbContextOptionsBuilder<DatabaseContext>();

        builder.UseSqlServer(connectionString, options => options.MigrationsAssembly(typeof(DatabaseContextFactory).Assembly.GetName().Name));

        return new DatabaseContext(builder.Options);
    }
}
```

#### Context Seed

The **ContextSeed** class is responsible for seeding initial data.

```csharp
public sealed class DatabaseContextSeed
{
    public void Seed(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserEntity>().HasData(new UserEntity
        {
            UserId = 1,
            Name = "Administrator",
            Surname = "Administrator",
            Email = "administrator@administrator.com",
            Roles = Roles.User | Roles.Admin,
            Status = Status.Active
        });
    }
}
```

#### Unit of Work

The **UnitOfWork** class is responsible for managing transactions.

```csharp
public sealed class DatabaseUnitOfWork : IDatabaseUnitOfWork
{
    public DatabaseUnitOfWork(DatabaseContext context)
    {
        Context = context;
    }

    private DatabaseContext Context { get; }

    public int SaveChanges()
    {
        return Context.SaveChanges();
    }

    public Task<int> SaveChangesAsync()
    {
        return Context.SaveChangesAsync();
    }
}
```

#### Entity Configuration

The **EntityConfiguration** class is responsible for configuring and mapping an entity to a table.

```csharp
public sealed class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(EntityTypeBuilder<UserEntity> builder)
    {
        builder.ToTable("Users", "User");

        builder.HasKey(x => x.UserId);

        builder.HasIndex(x => x.Email).IsUnique();
        builder.HasIndex(x => x.Login).IsUnique();

        builder.Property(x => x.UserId).IsRequired().ValueGeneratedOnAdd();
        builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Surname).IsRequired().HasMaxLength(200);
        builder.Property(x => x.Email).IsRequired().HasMaxLength(300);
        builder.Property(x => x.Login).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Password).IsRequired().HasMaxLength(500);
        builder.Property(x => x.Roles).IsRequired();
        builder.Property(x => x.Status).IsRequired();

        builder.HasMany(x => x.UsersLogs).WithOne(x => x.User).HasForeignKey(x => x.UserId);
    }
}
```

#### Repository

The **Repository** class is responsible for abstracting and isolating the data persistence.

```csharp
public sealed class UserRepository : EntityFrameworkCoreRelationalRepository<UserEntity>, IUserRepository
{
    public UserRepository(DatabaseContext context) : base(context) { }

    public Task<SignedInModel> SignInAsync(SignInModel signInModel)
    {
        return SingleOrDefaultAsync<SignedInModel>
        (
            userEntity => userEntity.Login.Equals(signInModel.Login)
            && userEntity.Password.Equals(signInModel.Password)
            && userEntity.Status == Status.Active
        );
    }
}
```
