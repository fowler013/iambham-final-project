-- -- procedures for PASSWORDS TABLE
-- create a password
drop procedure if exists spCreatePassword;
delimiter $$
create procedure spCreatePassword(p_password varchar(256))
begin

insert into passwords(password)
values(p_password);
select last_insert_id() as id;

end $$
delimiter ;
-- update password
drop procedure if exists spUpdatePassword;
delimiter $$
create procedure spUpdatePassword(p_id int, p_password varchar(256))
begin

update Passwords
set
    password = coalesce(p_password, password)
where id = p_id;

end $$
delimiter ;