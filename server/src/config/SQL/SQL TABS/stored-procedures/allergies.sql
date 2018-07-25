--PROCEDURES FOR ALLERGIES TABLE
--GET ALL ALLERGIES
delimiter //
CREATE PROCEDURE spGetAllergies() 
BEGIN 
	SELECT
		*
	FROM
		Allergies;
END //
delimiter ;
--CREATE ALLERGY
delimiter //
CREATE PROCEDURE spCreateAllergy( 
in p_userid int,
	p_allergy varchar(256))

BEGIN 
	INSERT INTO Allergies (
		userid,
        allergy)
	VALUES (
    p_userid,
    p_allergy);
	SELECT last_insert_id();
    
    END //
delimiter ;
--GET ALLERGY
delimiter //
CREATE PROCEDURE spGetAllergy(
in p_id int)
	

BEGIN 
	SELECT  
		*
	FROM
		Allergies
	WHERE
		id = p_id;
	END //
delimiter ;
--DELETE ALLERGY
delimiter //
CREATE PROCEDURE spDeleteAllergy(  
in p_allergyid int)
	

BEGIN 
	DELETE  
		
	FROM
		Allergies
	WHERE
		id = p_id;
	END //
delimiter ;
--UPDATE ALLERGY
delimiter //
CREATE PROCEDURE spUpdateAllergy(  
in p_id int,
	p_userid int,
    p_allergy varchar(256))
	

BEGIN 
	UPDATE Allergies 
	SET
		userid = coalesce(p_userid, userid),
        allergy = coalesce(p_allergy, allergy)
	WHERE
		id = p_id;
	END //
delimiter ;