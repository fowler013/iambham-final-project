--PROCEDURES FOR FAVORITES TABLE
--GET ALL FAVORITES
delimiter //
CREATE PROCEDURE spGetFavorites() 
BEGIN 
	SELECT
		*
	FROM
		Favorites;
END //
delimiter ;
--CREATE FAVORITE
delimiter //
CREATE PROCEDURE spCreateFavorites( 
in 	p_food varchar(256))

BEGIN 
	INSERT INTO Favorites (
        food)
	VALUES (
    p_food);
    
    END //
delimiter ;
--GET FAVORITE
delimiter //
CREATE PROCEDURE spGetFavorite(
in p_favoriteid int)
	

BEGIN 
	SELECT  
        food
	FROM
		Favorites
	WHERE
		Favorites.id = p_favoriteid;
	END //
delimiter ;
--DELETE FAVORITE
delimiter //
CREATE PROCEDURE spDeleteFavorite(  
in p_favoriteid int)
	

BEGIN 
	DELETE  
		
	FROM
		Favorites
	WHERE
		Favorites.id = p_favoriteid;
	END //
delimiter ;
--UPDATE FAVORITE
delimiter //
CREATE PROCEDURE spUpdateFavorite(  
in p_id int,
    p_food varchar(256))
	

BEGIN 
	UPDATE Favorites 
	SET
        food = coalesce(p_food, food)
	WHERE
		Favorites.id = p_id;
	END //
delimiter ;