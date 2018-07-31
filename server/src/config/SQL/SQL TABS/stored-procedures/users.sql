-- -- procedures for USERS TABLE
-- READ ALL Users
drop procedure if exists spGetAllUsers;
delimiter $$
create procedure spGetAllUsers()
begin

select * from Users;

end $$
delimiter ;
-- READ INDIVIDUAL User
drop procedure if exists spGetUser;
delimiter $$
create procedure spGetUser(p_id int)
begin

select * from Users
where id = p_id;

end $$
delimiter ;

-- CREATE User
drop procedure if exists spCreateUser;
delimiter $$
create procedure spCreateUser(
    p_email varchar(256), 
    p_firstname varchar(256), 
    p_lastname varchar(256),
    p_password varchar(256),
    p_username varchar(256)
)
begin

    insert into Passwords (
        `password`
    )
    values (
        p_password
    );

    set @pass_id = last_insert_id();

    insert into Users (
        passwordid,
        email, 
        firstname, 
        lastname,
        username
    )
    values (
        @pass_id,
        p_email, 
        p_firstname, 
        p_lastname,
        p_username
    );
    
    select 
        last_insert_id() 
    as 
        `id`;

end $$
delimiter ;

-- UPDATE User
drop procedure if exists spUpdateUser;
delimiter $$
create procedure spUpdateUser (p_id int, p_email varchar(256), p_firstname varchar(256), p_lastname varchar(256))
begin

UPDATE Users
set
    email = coalesce(p_email, email),
    firstname = coalesce(p_firstname, firstname),
    lastname = coalesce(p_lastname, lastname)
where id = p_id;

end $$
delimiter ;
-- DELETE User
drop procedure if exists spDeleteUser;
delimiter $$
create procedure spDeleteUser(p_id int)
begin

delete from Users
where id = p_id;

end $$
delimiter ;

