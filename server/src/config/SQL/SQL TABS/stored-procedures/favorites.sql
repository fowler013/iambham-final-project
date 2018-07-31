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
in p_recipeid int, p_userid int)
BEGIN

	INSERT INTO UserFavorites (recipeid, p_userid)
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
CREATE PROCEDURE spUpdateFavorite(in p_id int, p_recipeid int, p_userid int)
BEGIN 
	
	UPDATE UserFavorites 
	SET
		recipeid = coalesce(p_recipeid, recipeid),
		userid = coalesce(p_userid, userid)
	WHERE id = p_id;
	
END $$
delimiter ;