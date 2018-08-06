drop procedure if exists spGetAllStorageCategories;
delimiter $$
create procedure spGetAllStorageCategories(
    
)

begin

    select 
        *
    from 
        StorageCategories;

end $$
delimiter ; 