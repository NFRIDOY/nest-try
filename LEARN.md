# Nest.js

## Nest.js CLI

Nest cli is a command line interface for Nest.js framework. It is used to generate code, run tests, build the application, and more.

#### Commands:

**Generate a resource** : 4 in One(controller, service, module, dto/test)
 ```
nest g resource <res-name>
nest g res <res-name>
nest g res <res-name> --no-dto
```
*Other resource commands with more flags*:
```
nest g res <res-name> --no-service 
# (controller, module, dto)
nest g res <res-name> --no-controller 
# (service, module, dto)
nest g res <res-name> --no-module 
# (controller, service, dto)
nest g res <res-name> --dry-run 
# Show what would be generated but don't create files
nest g res <res-name> --flat 
# Don't create a sub-directory
nest g res <res-name> --path <path> 
# Create the resource in a sub-directory
nest g res <res-name> --skip-tests 
# Skips creating the test files
nest g res <res-name> --skip-routes 
# Skips registering the resource routes in the module
nest g res <res-name> --skip-modules 
# Skips creating the module
nest g res <res-name> --skip-dto 
# Skips creating the dto
nest g res <res-name> --skip-service 
# Skips creating the service
nest g res <res-name> --skip-controller 
# Skips creating the controller
nest g res <res-name> --skip-all 
# Skips creating all the files
nest g res <res-name> --skip-all --dry-run 
# Skips creating all the files and shows what would be generated but don't create files
nest g res <res-name> --flat 
# Don't create a sub-directory
nest g res <res-name> --path <path> 
# Create the resource in a sub-directory
nest g res <res-name> --skip-tests 
# Skips creating the test files
nest g res <res-name> --skip-routes 
# Skips registering the resource routes in the module
nest g res <res-name> --skip-modules 
# Skips creating the module
nest g res <res-name> --skip-dto 
# Skips creating the dto
nest g res <res-name> --skip-service 
# Skips creating the service
nest g res <res-name> --skip-controller 
# Skips creating the controller
nest g res <res-name> --skip-all 
# Skips creating all the files
nest g res <res-name> --skip-all --dry-run 
# Skips creating all the files and shows what would be generated but don't create files
```
**Generate a controller**
 ```
nest g controller <controller-name>
```
**Generate a module**
 ```
nest g module <module-name>
```
**Generate a service**
 ```
nest g service <service-name>
```
**Generate a filter**
 ```
nest g filter <filter-name>
```
**Generate a guard**
 ```
nest g guard <guard-name>
```
**Generate an interceptor**
 ```
nest g interceptor <interceptor-name>
```
**Generate a pipe**
 ```
nest g pipe <pipe-name>
```
**Generate a middleware**
 ```
nest g middleware <middleware-name>
```
**Generate a resolver**
 ```
nest g resolver <resolver-name>
```
**Generate a gateway**
 ```
nest g gateway <gateway-name>
```
**Generate a decorator**
 ```
nest g decorator <decorator-name>
```
**Generate a transform**
 ```
nest g transform <transform-name>
```

## Decorators

### What is a Decorator?

Decarators are just functions that are used to add metadata to classes, methods, properties, and parameters.

#### Syntax:

```typescript
@decorator()
```

#### Note: 
- Decorator are functions.
- Decorator are applied to classes, methods, properties, and parameters.
- Decorator are used to add metadata to classes, methods, properties, and parameters.

#### Applications of decorators?

1. Logging
2. Validation
3. Authentication
4. Authorization
5. Caching
6. Rate Limiting
7. Transaction Management
8. Circuit Breaker
9. Service Discovery
10. Configuration Management

#### Types of Decorators:

1. Class Decorators
2. Method Decorators
3. Property Decorators
4. Parameter Decorators

#### Class Decorators? 

Class decorators are functions that are used to add metadata to classes. They are applied to classes and can be used to add metadata to classes, methods, properties, and parameters.

```typescript
@ClassDecorator()
class MyClass {
  @MethodDecorator()
  myMethod() {
    console.log('myMethod');
  }

  @PropertyDecorator()
  myProperty: string;

  @ParameterDecorator()
  myParameter: string;
}
```

## Controllers

### What is a Controller?

Controller are functions that are used to handle incoming requests and return responses. They are used to organize the application into logical units.

#### CLI:

```bash
nest g controller <controller-name>
```

#### Syntax:

```typescript
@Controller()
class MyController {
  @MethodDecorator() // @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All()
  myMethod() {
    console.log('myMethod');
  }

  @PropertyDecorator() // @Body(), @Param(), @Query(), @Headers(), @Res(), @Req(), @Next()
  myProperty: string;

  @ParameterDecorator() // @Body(), @Param(), @Query(), @Headers(), @Res(), @Req(), @Next()
  myParameter: string;
}
```

#### Note: 
- Controller are functions.
- Controller are applied to classes, methods, properties, and parameters.
- Controller are used to handle incoming requests and return responses.

#### Applications of controller?    

1. User Management
2. Product Management
3. Order Management
4. Payment Management
5. Notification Management
6. Campaign Management
7. Loyalty Program Management
8. Review Management
9. Wishlist Management
10. Cart Management

#### Example

```typescript
@Controller('user')
class MyController {
  @Get()
  getUsers() {
    return 'All users';
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `User ${id}`;
  }

  @Post()
  createUser(@Body() body: any) {
    return `User created ${JSON.stringify(body)}`;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return `User updated ${id} ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `User deleted ${id}`;
  }
}
```

#### Controllers without route prefix

```typescript
@Controller()
class MyController {
  @Get()
  getUsers() {
    return 'All users';
  }
}
```

### Services

#### What is a Service?

Service are functions that are used to handle business logic. They are used to organize the application into logical units.

#### CLI:

```bash
nest g service <service-name>
```

#### Syntax:

```typescript
@Injectable()
class MyService {
  myMethod() {
    console.log('myMethod');
  }

  myProperty: string;

  myParameter: string;
}
```

#### Note: 
- Service are functions.
- Service are applied to classes, methods, properties, and parameters.
- Service are used to handle business logic.
- Service are injectable. Always use @Injectable() decorator to make a class injectable.
- Service are singleton by default.
- Service are scoped to the module.
  
  #### Dependency Injection System in Nest.js
  Dependency Injection is a design pattern that allows us to provide the dependencies of a class to it, rather than the class creating its own dependencies. In simple terms, it is a way to provide services to controllers. There are **four** types of dependency injection in Nest.js:
    - **Constructor Injection**: **Recommended** 
    > This is the most recommended way to inject dependencies in Nest.js. It is simple, clean, and easy to test.
    ```typescript
    @Injectable()
    class MyService {}
    
    @Controller()
    class MyController {
      constructor(private readonly myService: MyService) {}
    }
    ```
    > Example:
    ```typescript
    @Get() getUsers() {
        return this.myService.getUsers(); 
    }
    ```

    - **Property Injection**: 
    ```typescript
    @Injectable()
    class MyService {}
    
    @Controller()
    class MyController {
      @Injectable() private readonly myService: MyService;
    }
    ```
    > Example:
    ```typescript
    @Get() getUsers() {
        return this.myService.getUsers(); 
    }
    ```


    - **Method Injection**:
    ```typescript
    @Injectable()
    class MyService {}
    
    @Controller()
    class MyController {
      @Injectable() private readonly myService: MyService;
    }
    ```
    > Example:
    ```typescript
    @Get() getUsers() {
        return this.myService.getUsers(); 
    }
    ```

    - **Interface Injection**:
    ```typescript
    @Injectable()
    class MyService {}
    
    @Controller()
    class MyController {
      @Injectable() private readonly myService: MyService;
    }
    ```
    > Example:
    ```typescript
    @Get() getUsers() {
        return this.myService.getUsers(); 
    }
    ```

#### Applications of service?    

1. User Management
2. Product Management
3. Order Management
4. Payment Management
5. Notification Management
6. Campaign Management
7. Loyalty Program Management
8. Review Management
9. Wishlist Management
10. Cart Management

#### Example

```typescript
@Injectable()
class MyService {
  myMethod() {
    console.log('myMethod');
  }

  myProperty: string;

  myParameter: string;
}
```

### Modules

#### What is a Module?

Module are containers for controllers, services, and other modules. They are used to organize the application into logical units.

#### Syntax:

```typescript
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
```

#### Note: 

- It is a core part of Nest.js Architecture that helps to organize the application into logical units. 
- **Root module** - The root module is the main module of the application. It is the entry point for the application *or any module's entry point where all controllers and services are included.*
- **Feature module** - A feature module is a module that is used to organize the application into logical units.
- **Core module** - A core module is a module that is used to provide common services to the application.
- **Shared module** - A shared module is a module that is used to provide common components to the application.
- Module are used to organize the application into logical units.
- Module are injectable.
- Module are singleton by default.
- Module are scoped to the application.
- Module can be imported from other modules.
- Module can be exported to other modules.
- Module can be used to organize the application into logical units.

### Routing in Nest.js

Routing is the process of handling incoming requests and returning appropriate responses. In Nest.js, routing is handled by controllers.


### class-validator class-transformer

**CLI**

```bash
npm i --save class-validator class-transformer
```

- class-validator is a decorator-based library for validating class-based objects. class-transformer is a decorator-based library for transforming class-based objects.
- It helps in validating the incoming request data.
- It helps in transforming the incoming request data.