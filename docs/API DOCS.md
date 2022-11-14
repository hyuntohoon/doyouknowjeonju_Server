# API DOCS

## Bookmark
|auth|URL|Method|URL Params|DATA Params|Success Response|Erro Response|
|---|---|---|---|---|---|---|
|getbookmark|bookmark/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|createbookmark|bookmark|post|---|JSON: {"hosName":"",  "hosAdderss":"",  "userId" : "",}|code:200  Content:{}|code:401|
#
## User
|auth|URL|Method|URL Params|DATA Params|Success Response|Erro Response|
|---|---|---|---|---|---|---|
|getUser|user/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|signup|user|post|---|JSON: {"userId":"",  "userPw":"",  "userName" : "",  "userPhone" :  "",}|code:200  Content:{}|code:401|
#
## Hospital
|auth|URL|Method|URL Params|DATA Params|Success Response|Erro Response|
|---|---|---|---|---|---|---|
|getHospital|hospital/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|getAllHospital`by8bitmap`|get`by8bitmap`|---|---|---|code:401|
#
## Parking
|auth|URL|Method|URL Params|DATA Params|Success Response|Erro Response|
|---|---|---|---|---|---|---|
|getparking|parking/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
#
## todolist
|auth|URL|Method|URL Params|DATA Params|Success Response|Erro Response|
|---|---|---|---|---|---|---|
|getTodolist|todolist/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|insertTodolist|todolist|post|---|JSON: {"string":"",  "userId":"",}|code:200  Content:{}|code:401|
|updateTodolist|todolist/|get|---|JSON: {"string":"",  "check" : "",  "userId":"",}|code:200  Content:{}|code:401|
|deleteTodolist|todolist/:id|post|---|JSON: {"string":"",  "userId":"",}|code:200  Content:{}|code:401|
#


