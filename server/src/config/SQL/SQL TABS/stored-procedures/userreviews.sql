-- -- procedures for USERS TABLE
-- READ ALL User Reviews
drop procedure if exists spGetAllUserReviews;
delimiter $$
create procedure spGetAllUserReviews()
begin

select *
from UserReviews;

end $$
delimiter ;
-- READ INDIVIDUAL User Review
drop procedure if exists spGetUserReview;
delimiter $$
create procedure spGetUserReview(p_id int)
delimiter $$
begin

select *
from UserReviews
where id = p_id;

end $$
delimiter ;
-- CREATE User
drop procedure if exists spCreateUserReview;
delimiter $$
create procedure spCreateUserReview(p_userid int, p_review text)
begin

insert into UserReviews(userid, review)
values(p_userid, p_review);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE User
drop procedure if exists spUpdateUserReview;
delimiter $$
create procedure spUpdateUserReview(p_id int, p_userid int, p_review text)
begin

update UserReviews
set
    userid = coalesce(p_userid, userid),
    review = coalesce(p_review, review)
where id = p_id;

end $$
delimiter ;

-- DELETE User
drop procedure if exists spDeleteUserReview;
delimiter $$
create procedure spDeleteUserReview(p_id int)
begin

delete from UserReviews
where id = p_id;

end $$
delimiter ;


