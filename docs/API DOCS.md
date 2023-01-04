# API DOCS

## Bookmark
|**Bookmark**|**URL**|**Method**|**URL Params**|**DATA Params**|**Success Response**|**Error Response**|
|---|---|---|---|---|---|---|
|*getbookmark*|bookmark/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|*createbookmark*|bookmark|post|---|JSON: {"hosName":"",  "hosAdderss":"",  "userId" : "",}|code:200  Content:{}|code:401|
#
## User
|**User**|**URL**|**Method**|**URL Params**|**DATA Params**|**Success Response**|**Error Response**|
|---|---|---|---|---|---|---|
|*getUser*|user/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|*signup*|user|post|---|JSON: {"userId":"",  "userPw":"",  "userName" : "",  "userPhone" :  "",}|code:200  Content:{}|code:401|
#
## Hospital
|**Hospital**|**URL**|**Method**|**URL Params**|**DATA Params**|**Success Response**|**Error Response**|
|---|---|---|---|---|---|---|
|*getHospital*|hospital/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|*getAllHospital`by8bitmap`*|get`by8bitmap`|---|---|---|code:401|
#
## Parking
|**Parking**|**URL**|**Method**|**URL Params**|**DATA Params**|**Success Response**|**Error Response**|
|---|---|---|---|---|---|---|
|*getparking*|parking/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
#
## todolist
|**todolist**|**URL**|**Method**|**URL Params**|**DATA Params**|**Success Response**|**Error Response**|
|---|---|---|---|---|---|---|
|*getTodolist*|todolist/:id|get|id=`integer`|---|code:200  Content:{}|code:401|
|*createTodolist*|todolist|post|---|JSON: {"string":"",  "userId":"",}|code:200  Content:{}|code:401|
|*updateTodolist*|todolist/|put|---|JSON: {"string":"",  "check" : "",  "userId":"",}|code:200  Content:{}|code:401|
|*deleteTodolist*|todolist/:id|delete|---|JSON: {"string":"",  "userId":"",}|code:200  Content:{}|code:401|
#


