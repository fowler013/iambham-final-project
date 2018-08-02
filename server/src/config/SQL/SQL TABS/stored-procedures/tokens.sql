-- -- TOKENS TABLE
-- GET ALL
drop procedure if exists spGetAllTokens;
delimiter $$
create procedure spGetAllTokens()
begin

select *
from Tokens;

end $$
delimiter ;
-- GET ONE
drop procedure if exists spGetToken;
delimiter $$
create procedure spGetToken(p_id int)
begin

select *
from Tokens
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreateToken;
delimiter $$
create procedure spCreateToken(p_userid int)
begin

insert into Tokens(userid)
values(p_userid);

end $$
delimiter ;
-- DELETE
drop procedure if exists spDeleteToken;
delimiter $$
create procedure spDeleteToken(p_id int)
begin

delete from Tokens
where id = p_id;

end $$
delimiter ;