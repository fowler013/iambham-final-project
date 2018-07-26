-- -- procedures for USERS History TABLE
-- READ ALL Users History
drop procedure if exists spGetAllUserHistory;
delimiter $$
create procedure spGetAllUserHistory()
begin

select *
from UserHistory;

end $$
delimiter ;
-- READ INDIVIDUAL User History
drop procedure if exists spGetUserHistory;
create procedure spGetUserHistory(p_id int)
begin


end $$
delimiter ;
-- CREATE User History
drop procedure if exists spCreateUserHistory;
create procedure spCreateUserHistory(p_userid int, p_previousorder text)
begin

insert into UserHistory(userid, previousorder)
values(p_userid, p_previousorder);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE User History
drop procedure if exists spUpdateUserHistory;
create procedure spUpdateUserHistory(p_id int, p_userid int, p_previousorder text)
begin

update UserHistory
set
    userid = coalesce(p_userid, userid),
    previousorder = coalesce(p_previousorder, previousorder)
where id = p_id;

end $$
delimiter ;
-- DELETE User History
drop procedure if exists spDeleteUserHistory;
create procedure spDeleteUserHistory(p_id int)
begin

delete from UserHistory
where id = p_id;

end $$
delimiter ;
