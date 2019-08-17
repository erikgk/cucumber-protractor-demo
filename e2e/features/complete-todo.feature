Feature: Complete todo
    As a user
    I want to mark an item as completed
    So that I can manage my tasks

    Scenario: Complete one last task
        Given the user has an empty todo list
        And the user adds a todo item with text "To be completed"
        When the user toggles "To be completed" completed state
        Then there are 0 items left on the todo list
        And there are 0 uncomplete item on the todo list
        And there is 1 completed item left on the todo list
        And can clear completed tasks

    Scenario: Complete part of the tasks
        When the user has the following tasks on the todo list
            | text                          | status     |
            | Ignore this one               | uncomplete |
            | To be completed               | completed  |
            | Complete this one as well     | completed  |
            | Never finish this one         | uncomplete |
        Then there are 2 items left on the todo list
        And there are 2 uncomplete items on the todo list
        And there are 2 completed items left on the todo list
        And can clear completed tasks

    Scenario: Undo toggle complete one last task
        Given the user has the following tasks on the todo list
            | text                          | status     |
            | Never finish this one         | uncomplete |
            | To be completed               | completed  |
        And there is 1 uncomplete item on the todo list
        And there is 1 completed items left on the todo list
        When the user toggles "To be completed" completed state
        Then there are 2 uncomplete items on the todo list
        And there are 0 completed items left on the todo list
        And cannot clear completed tasks
