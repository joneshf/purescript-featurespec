module Test.StackFeatureSpec where

  import Data.Either

  import Test.FeatureSpec

  data Stack a = EmptyStack
               | Push a (Stack a)

  data StackError = StackUnderflow
                  | StackOverflow

  push :: forall a. a -> Stack a -> Stack a
  push = Push

  pop :: forall a eff. Stack a -> Either StackError {fst :: a, snd :: Stack a}
  pop EmptyStack  = Left StackUnderflow
  pop (Push x xs) = Right {fst: x, snd: xs}

  peek :: forall a eff. Stack a -> Either StackError a
  peek EmptyStack = Left StackUnderflow
  peek (Push x _) = Right x

  isEmpty :: forall a. Stack a -> Boolean
  isEmpty EmptyStack = true
  isEmpty _          = false

  emptyStack :: forall a. Stack a
  emptyStack = EmptyStack

  stackFeatureSpec = spec "StackFeatureSpec" do
    feature "A Stack is pushed and popped" do
      scenario "empty is invoked on an empty stack" do
        given "an empty stack"
        let stack = emptyStack

        when "empty is invoked on the stack"
        it "returns true"
        assert (isEmpty stack)

      scenario "peek is invoked on an empty stack" do
        given "an empty stack"
        let stack = emptyStack

        when "peek is invoked on the stack"
        it "returns a StackUnderflow"
        assertLeft (peek stack)

      scenario "pop is invoked on an empty state" do
        given "an empty stack"
        let stack = emptyStack

        when "peek is invoked on the stack"
        it "returns a StackUnderflow"
        assertLeft (pop stack)
