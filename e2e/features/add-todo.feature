Feature: Add todo
    As a user
    I want to be able to add one or more todo's to my list
    So that I can manage my tasks easily

    Scenario: Add one todo to the list
        Given the user has an empty todo list
        When the user adds a todo item with text "My First Todo"
        Then there is 1 uncomplete item on the todo list
