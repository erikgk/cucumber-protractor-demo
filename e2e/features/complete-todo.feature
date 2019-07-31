Feature: Complete todo
    As a user
    I want to mark an item as completed 
    So that I can manage my tasks

    Scenario: Complete one last task
        Given I have an empty todo list
        And I add a todo item with text "To be completed"
        When I toggle "To be completed" completed state
        Then I have 0 items left on my todo list
        And I have 0 uncomplete item on my todo list
        And I have 1 completed items left on my todo list
        And I can clear completed tasks
    
    Scenario: Complete part of the tasks
        Given I have an empty todo list
        And I add a todo item with text "Ignore this one"
        And I add a todo item with text "To be completed"
        And I add a todo item with text "Complete this one as well"
        And I add a todo item with text "Never finish this one"
        When I toggle "To be completed" completed state
        When I toggle "Complete this one as well" completed state
        Then I have 2 items left on my todo list
        And I have 2 uncomplete item on my todo list
        And I have 2 completed items left on my todo list
        And I can clear completed tasks

    Scenario: Complete one last task
        Given I have an empty todo list
        And I add a todo item with text "Never finish this one"
        And I add a todo item with text "To be completed"
        When I toggle "To be completed" completed state
        And I toggle "To be completed" completed state
        And I have 2 uncomplete item on my todo list
        And I have 0 completed items left on my todo list
        And I cannot clear completed tasks
