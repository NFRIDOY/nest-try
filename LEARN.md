# Nest.js

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
