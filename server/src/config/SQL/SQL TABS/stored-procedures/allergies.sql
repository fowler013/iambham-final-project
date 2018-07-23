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
CREATE PROCEDURE spCreateAllergies( 
in p_userid int,
	p_allergy varchar(256))

BEGIN 
	INSERT INTO Allergies (
		userid,
        allergy)
	VALUES (
    p_userid,
    p_allergy);
    
    END //
delimiter ;
--GET ALLERGY
delimiter //
CREATE PROCEDURE spGetAllergy(
in p_allergyid int)
	

BEGIN 
	SELECT  
		userid,
        allergy
	FROM
		Allergies
	WHERE
		Allergies.id = p_allergyid;
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
		Allergies.id = p_allergyid;
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
		title = coalesce(p_userid, userid),
        allergy = coalesce(p_allergy, allergy)
	WHERE
		Allergies.id = p_id;
	END //
delimiter ;