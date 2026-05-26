# Nest.js

## Nest.js CLI

Nest cli is a command line interface for Nest.js framework. It is used to generate code, run tests, build the application, and more.

#### Commands:

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

## Modules

### What is a Module?

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
