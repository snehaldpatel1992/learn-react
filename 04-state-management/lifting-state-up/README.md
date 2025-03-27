# Lifting State Up

## Concept

Lifting state up is a pattern where the state of multiple child components is managed by a parent component. This is essential when multiple components need to share and respond to the same data.

##  Flow

1. **Start with simple local state in a single component**
   - Demonstrate a counter with state contained within one component
   - Show how events modify this state

2. **Split component into parent-child structure**
   - Move state to parent, pass as props to children
   - Pass event handlers down to children components
   - Show how this maintains the same functionality while enabling component reuse

## Key Points to Emphasize

- State should be lifted to the common ancestor of components that need access
- Child components receive data through props and request changes through callbacks
- This creates a single source of truth for shared data
- State lifting enables parent components to coordinate between children
