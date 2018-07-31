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
create procedure spCreateUserReview(p_userid int, p_rating int, p_review text)
begin

insert into userreviews(userid, review, ratings)
values(p_userid, p_review, p_rating);
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

-- grab all reviews by a certain user
-- probably won't use this if we are plannig on limiting one review per user
drop procedure if exists spGetReviewsByUser;
delimiter $$
create procedure spGetReviewsByUser(p_userid int)
begin

select *
from userreviews
where userid = p_userid;

end $$
delimiter ;

drop procedure if exists spGetUserReviewBasedonRecipeID;
delimiter $$
CREATE PROCEDURE spGetUserReviewBasedonRecipeID(p_recipeid int)
BEGIN
SELECT 
	`userreviews`.`id`,
    `userreviews`.`userid`,
    `userreviews`.`review`,
    `userreviews`.`ratings`
FROM `heroku_095c413572425f3`.`userreviews`
WHERE `userreviews`.`recipeid` = p_recipeid;

END
delimiter ;

drop procedure if exists spGetUserReviewBasedonUserID
delimiter $$
CREATE PROCEDURE spGetUserReviewBasedonUserID(p_userid int)
BEGIN
SELECT 
	`userreviews`.`id`,
    `userreviews`.`recipeid`,
    `userreviews`.`review`,
    `userreviews`.`ratings`
FROM `heroku_095c413572425f3`.`userreviews`
WHERE `userreviews`.`userid` = p_userid;

END
delimiter ;

DROP procedure IF EXISTS `spDeleteUserReviewBasedonRecipeID`;

DELIMITER $$
USE `heroku_095c413572425f3`$$
CREATE PROCEDURE `spDeleteUserReviewBasedonRecipeID` (p_recipeid int)
BEGIN
DELETE FROM `heroku_095c413572425f3`.`userreviews`
WHERE `userreviews`.`recipeid` = p_recipeid;
END$$

DELIMITER ;

DROP procedure IF EXISTS `spDeleteUserReviewBasedonUserID`;

DELIMITER $$
USE `heroku_095c413572425f3`$$
CREATE DEFINER=`b1b1c890b1170e`@`%` PROCEDURE `spDeleteUserReviewBasedonUserID`(p_userid int)
BEGIN
DELETE FROM `heroku_095c413572425f3`.`userreviews`
WHERE `userreviews`.`userid` = p_userid;
END$$

DELIMITER ;

DROP procedure IF EXISTS `spDeleteUserReviewBasedonRecipeIDandUserID`;

DELIMITER $$
USE `heroku_095c413572425f3`$$
CREATE DEFINER=`b1b1c890b1170e`@`%` PROCEDURE `spDeleteUserReviewBasedonRecipeIDandUserID`(p_recipeid int, p_userid int)
BEGIN
DELETE FROM `heroku_095c413572425f3`.`userreviews`
WHERE `userreviews`.`userid` = p_userid AND `userreviews`.`recipeid` = p_recipeid;
END$$

DELIMITER ;
