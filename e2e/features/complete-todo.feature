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
        When I have the following tasks on my todo list
            | text                          | status     |
            | Ignore this one               | uncomplete |
            | To be completed               | completed  |
            | Complete this one as well     | completed  |
            | Never finish this one         | uncomplete |
        Then I have 2 items left on my todo list
        And I have 2 uncomplete item on my todo list
        And I have 2 completed items left on my todo list
        And I can clear completed tasks

    Scenario: Undo toggle complete one last task
        Given I have the following tasks on my todo list
            | text                          | status     |
            | Never finish this one         | uncomplete |
            | To be completed               | completed  |
        And I have 1 uncomplete item on my todo list
        And I have 1 completed items left on my todo list
        When I toggle "To be completed" completed state
        Then I have 2 uncomplete item on my todo list
        And I have 0 completed items left on my todo list
        And I cannot clear completed tasks
