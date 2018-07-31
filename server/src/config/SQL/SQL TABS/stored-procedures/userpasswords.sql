-- -- procedures for PASSWORDS TABLE
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