Description:
A Kanban board is a visual project management tool that helps teams visualize and track their work. It is typically made up of a physical or digital board that is divided into columns, each of which represents a stage in the team's workflow. The columns are usually labeled with categories like "To Do", "In Progress", and "Done".

The Kanban board is used to track work items as they move through each stage of the workflow. Each work item is represented by a card that is placed on the board, and team members can move the cards from one column to another as they work on them. This helps the team to see at a glance which tasks are in progress, which tasks are waiting, and which tasks have been completed.

Kanban boards are often used in agile software development, but they can be used in any team or project that involves workflow management. They are particularly useful for teams that want to visualize their work, identify bottlenecks, and continuously improve their processes.

Features
Create and manage the multiple set of tasks that we want to track.
We can drag and drop these tasks from one set of list to another.
We can view the set of tasks in the different lists like "to do" , "Progress" and "done".
Edit and delete the lists and tasks as per our need.
Assign the different tasks to different members.
We can view the information related to each task such as title,date,description and label.
Tech Stack
ReactJS
Feather 
Material UI
React Icons
React router
board = [ list : {} ]

list = { list_id:"random id", list_title:"todo/in-progress/done", list_createdAt: "current date and time", card: [ { id: "id", createdAt: "current date and time", title:"task title", description:"task description" } ] }

list_id:[{ label: "Math.random()", type: "number", default: "null" }]

list_title:[{ label: "todo/in-progress/done", type: "String", default: "" }]

card :{ label: "card", type: "array", }

Installation
To install and run the application locally, follow these steps:

Clone this repository to your local machine
Run npm install to install all dependencies
Run npm run dev to start the development server
Open http://localhost:5173/ in your browser to view the application.
And you can view the application successfully in your browser.
Deployment Site link
Open https://kanban-lmqs.onrender.com in your browser to view the application.

Data Structure
List =[
    {
        id: 'uuidv4',
        title: 'Board title',
        Cards: [
            id: '22r0h9i444t'
            
            title: 'Card Title,
            tasks: [
                {
                    id: 'uuidv4',
                    title: 'Title 1'
                }
            ],
            desc: 'Description',
            date: new Date()
        ]
    }
]
Collaborators       
1> Asif Mondal     
2> Aryan Jamwal     
3> Pragati Srivastava
4> Shubham Jadhav
