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
-- CREATE User Review
drop procedure if exists spCreateUserReview;
delimiter $$
create procedure spCreateUserReview(p_userid int, p_recipeid varchar(256), p_rating int, p_review text)
begin

insert into userreviews(userid, recipeid, review, ratings)
values(p_userid, p_recipeid, p_review, p_rating);
select last_insert_id() as id;

end $$
delimiter ;
-- UPDATE User Review
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

-- DELETE User Review
drop procedure if exists spDeleteUserReview;
delimiter $$
create procedure spDeleteUserReview(p_id int)
begin

delete from userreviews
where id = p_id;

end $$
delimiter ;
-- -- -- -- GET REVIEW BY RECIPE ID
drop procedure if exists spGetUserReviewBasedonRecipeID;
delimiter $$
CREATE PROCEDURE spGetUserReviewBasedonRecipeID(p_recipeid varchar(256))
BEGIN

SELECT 
	ur.id,
    ur.userid,
    ur.review,
    ur.ratings,
    u.username
    ur._created
FROM UserReviews ur
join Users u on ur.userid = u.id
WHERE recipeid = p_recipeid;

END $$
delimiter ;
-- -- -- -- GET REVIEW BY USER ID
drop procedure if exists spGetUserReviewBasedonUserID;
delimiter $$
CREATE PROCEDURE spGetUserReviewBasedonUserID(p_userid int)
BEGIN

SELECT 
	id,
    recipeid,
    review,
    ratings
FROM UserReviews
WHERE userid = p_userid;

END $$
delimiter ;
-- -- -- -- GET REVIEW BY USER ID & RECIPE ID
DROP procedure IF EXISTS spGetUserReviewBasedonRecipeIDandUserID;
DELIMITER $$
CREATE PROCEDURE spGetUserReviewBasedonRecipeIDandUserID(p_recipeid varchar(256), p_userid int)
BEGIN

SELECT 
	id,
    review,
    ratings
FROM UserReviews
WHERE userid = p_userid AND recipeid = p_recipeid;

END $$
DELIMITER ;
-- -- -- -- DELETE REVIEW BY RECIPE ID
DROP procedure IF EXISTS spDeleteUserReviewBasedonRecipeID;
DELIMITER $$
CREATE PROCEDURE spDeleteUserReviewBasedonRecipeID (p_recipeid varchar(256))
BEGIN

DELETE FROM UserReviews
WHERE recipeid = p_recipeid;

END $$
DELIMITER ;
-- -- -- -- DELETE REVIEW BY USER ID
DROP procedure IF EXISTS spDeleteUserReviewBasedonUserID;
DELIMITER $$

CREATE PROCEDURE spDeleteUserReviewBasedonUserID(p_userid int)
BEGIN
DELETE FROM UserReviews
WHERE userid = p_userid;

END $$
DELIMITER ;
-- -- -- -- DELETE REVIEW BY USER ID & RECIPE ID
DROP procedure IF EXISTS spDeleteUserReviewBasedonRecipeIDandUserID;
DELIMITER $$
CREATE PROCEDURE spDeleteUserReviewBasedonRecipeIDandUserID(p_recipeid varchar(256), p_userid int)
BEGIN

DELETE FROM UserReviews
WHERE userid = p_userid AND recipeid = p_recipeid;

END $$
DELIMITER ;
