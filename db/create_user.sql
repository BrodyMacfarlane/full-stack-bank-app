insert into users
(user_name, email, image, auth_id)
values
($1, $2, $3, $4)
returning *;