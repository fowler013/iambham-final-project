-- -- USER STORAGES
-- ALL USER STORAGES
drop procedure if exists spGetAllUserStorages;
delimiter $$
create procedure spGetAllUserStorages (
    in p_userid int
)

begin

    select 
        u.*,
        s.categoryname
    from 
        UserStorage u
    join
        StorageCategories s
    on 
        u.categoryid = s.id
    where 
        userid = p_userid;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreateUserStorage;
delimiter $$
create procedure spCreateUserStorage (
    in p_categoryid int,
    in p_userid int,
    in p_item varchar(256)
)

begin

    insert into UserStorage(
        categoryid,
        userid,
        item
    )  
    values (
        p_categoryid,
        p_userid,
        p_item
    );

    select 
        last_insert_id() as `id`;

end $$
delimiter ;
-- DELETE
drop procedure if exists spDeleteUserStorage;
delimiter $$
create procedure spDeleteUserStorage (
    in p_id int
)

begin

    delete from 
        UserStorage
    where
        id = p_id;

end $$
delimiter ;