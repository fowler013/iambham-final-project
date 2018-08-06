drop procedure if exists spGetAllUserStorage;
drop procedure if exists spGetAllUserStorages;
delimiter $$
create procedure spGetAllUserStorages (
    in p_userid int
)

begin

    select 
        *
    from 
        UserStorage
    where 
        userid = p_userid;

end $$
delimiter ;

drop procedure if exists spCreateUserStorage;
delimiter $$
create procedure spCreateUserStorage (
    in p_userid int,
    in p_item varchar(256)
)

begin

    insert into UserStorage(
        userid,
        item
    )  
    values (
        p_userid,
        p_item
    );

    select 
        last_insert_id() as `id`;

end $$
delimiter ;

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