Feature: Add todo
    As a user
    I want to be able to add one or more todo's to my list
    So that I can manage my tasks easily

    Scenario: Add one todo to the list
        Given I have an empty todo list
        When I add a todo item with text "My First Todo"
        Then I have 1 uncomplete item on my todo list
