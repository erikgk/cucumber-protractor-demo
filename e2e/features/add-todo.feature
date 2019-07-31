Feature: Add todo 
    In order to note down a todo item
    As a user
    I want to be able to add one or more todo's to my list

    Scenario: Add one todo to the list
        Given I have an empty todo list
        When I add a todo item with text "My First Todo"
        Then I have 1 uncomplete item on my todo list 
    
    Scenario: Add one todo to the list
        Given I have an empty todo list
        When I add a todo item with text "My First Todo"
        When I add a todo item with text "My Second Todo"
        Then I have 2 uncomplete item on my todo list 
