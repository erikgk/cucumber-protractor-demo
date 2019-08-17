Feature: Remove completed todos
    As a user with a full list of completed todos
    I want to remove my old tasks with one click
    So that I can focus on open tasks

    Scenario: Clear completed tasks
        Given the user has the following tasks on the todo list
            | text                      | status     |
            | Ignore this one           | uncomplete |
            | To be completed           | completed  |
            | Complete this one as well | completed  |
            | Never finish this one     | uncomplete |
        And can clear completed tasks
        When the user clears all completed tasks
        Then there are 2 uncomplete item on the todo list
        And there are 0 completed items left on the todo list
        And cannot clear completed tasks
