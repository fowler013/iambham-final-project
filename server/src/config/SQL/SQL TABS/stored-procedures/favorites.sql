-- -- procedures for User Favorites TABLE
-- Get all Favorites
drop procedure if exists spGetAllFavorites;
delimiter $$
CREATE PROCEDURE spGetAllFavorites() 
BEGIN

	SELECT *
	FROM UserFavorites;

END $$
delimiter ;
-- GET FAVORITE
drop procedure if exists spGetFavorite;
delimiter $$
CREATE PROCEDURE spGetFavorite(in p_id int)
BEGIN 
	
	SELECT *
	FROM UserFavorites
	WHERE id = p_id;

END $$
delimiter ;
-- CREATE FAVORITE
drop procedure if exists spCreateFavorite;
delimiter $$
CREATE PROCEDURE spCreateFavorite( 
in p_recipeid varchar(256), p_userid int)
BEGIN

	INSERT INTO UserFavorites (recipeid, userid)
	VALUES (p_recipeid, p_userid);
	select last_insert_id() as id;
    
END $$
delimiter ;
-- DELETE FAVORITE
drop procedure if exists spDeleteFavorite;
delimiter $$
CREATE PROCEDURE spDeleteFavorite(in p_id int)
BEGIN 
	
	DELETE FROM UserFavorites
	WHERE id = p_id;

END $$
delimiter ;
-- UPDATE FAVORITE
drop procedure if exists spUpdateFavorite;
delimiter $$
CREATE PROCEDURE spUpdateFavorite(in p_id int, p_recipeid varchar(256))
BEGIN 
	
	UPDATE UserFavorites 
	SET
		recipeid = coalesce(p_recipeid, recipeid)
	WHERE id = p_id;
	
END $$
delimiter ;

-- -- -- -- GET FAVORITE BY RECIPE ID
drop procedure if exists spGetFavoriteByRecipeID;
delimiter $$
create procedure spGetFavoriteByRecipeID(in p_recipeid varchar(256))
BEGIN

SELECT
	id,
    userid
FROM UserFavorites
WHERE recipeid = p_recipeid;

end $$
delimiter ;
-- -- -- -- GET FAVORITE BY USER ID
drop procedure if exists spGetFavoriteByUserID;
delimiter $$
create procedure spGetFavoriteByUserID(in p_userid int)
BEGIN

SELECT
	id,
    recipeid
FROM UserFavorites
WHERE userid = p_userid;

end $$
delimiter ;

-- -- -- -- DELETE FAVORITE BY RECIPE ID
drop procedure if exists spDeleteFavoriteByRecipeID;
delimiter $$
create procedure spDeleteFavoriteByRecipeID(in p_recipeid varchar(256))
BEGIN

DELETE 
FROM UserFavorites 
WHERE recipeid = p_recipeid;

end $$
delimiter ;
-- -- -- -- DELETE FAVORITE BY USER ID
drop procedure if exists spDeleteFavoriteByUserID;
delimiter $$
create procedure spDeleteFavoriteByUserID(in p_userid int)
BEGIN

DELETE 
FROM UserFavorites 
WHERE userid = p_userid;

end $$
delimiter ;

-- -- DELETE FAVORITE BY USERID AND RECIPEID
drop procedure if exists spDeleteFavoriteByRecipeIdAndUserId;
delimiter $$
create procedure spDeleteFavoriteByRecipeIdAndUserId(in p_recipeid int, in p_userid int)
BEGIN

DELETE FROM UserFavorites
WHERE recipeid = p_recipeid AND userid = p_userid;

END $$
delimiter ;