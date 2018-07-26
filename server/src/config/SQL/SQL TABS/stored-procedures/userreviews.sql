-- -- procedures for USERS TABLE
-- READ ALL User Reviews
drop procedure if exists spGetAllUserReviews;
delimiter $$
create procedure spGetAllUserReviews()
begin

select *
from userreviews;

end $$
delimiter ;
-- READ INDIVIDUAL User Review
drop procedure if exists spGetUserReview;
delimiter $$
create procedure spGetUserReview(p_id int)
begin

select *
from userreviews
where id = p_id;

end $$
delimiter ;
-- CREATE User
drop procedure if exists spCreateUserReview;
delimiter $$
create procedure spCreateUserReview(p_userid int, p_rating int, p_review text)
begin

insert into userreviews(userid, review, ratings)
values(p_userid, p_review, p_rating);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE User
drop procedure if exists spUpdateUserReview;
delimiter $$
create procedure spUpdateUserReview(p_id int, p_rating int, p_review text)
begin

update userreviews
set
    ratings = coalesce(p_rating, ratings),
    review = coalesce(p_review, review)
where id = p_id;

end $$
delimiter ;

-- DELETE User
drop procedure if exists spDeleteUserReview;
delimiter $$
create procedure spDeleteUserReview(p_id int)
begin

delete from userreviews
where id = p_id;

end $$
delimiter ;

