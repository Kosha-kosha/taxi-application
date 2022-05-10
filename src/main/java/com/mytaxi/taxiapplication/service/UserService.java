package com.mytaxi.taxiapplication.service;

import com.mytaxi.taxiapplication.dto.UserDTO;
import com.mytaxi.taxiapplication.entity.UserEntity;
import com.mytaxi.taxiapplication.exception.UserAlreadyExistException;
import com.mytaxi.taxiapplication.model.UserPrincipal;
import com.mytaxi.taxiapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

//    @PersistenceContext
//    private EntityManager em;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        Optional<UserEntity> user = userRepository.findByUserName(userName);

        user.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));

        return user.map(UserPrincipal::new).get();
    }

    public UserEntity findUserById(Integer userId) {
        Optional<UserEntity> userFromDb = userRepository.findById(userId);
        return userFromDb.orElse(new UserEntity());
    }

    public List<UserEntity> allUsers() {
        return userRepository.findAll();
    }

    public boolean saveUser(UserDTO userDTO) throws UserAlreadyExistException {
        if (checkIfUserExist(userDTO.getUserName())) {
            throw new UserAlreadyExistException("User already exists for this name: " + userDTO.getUserName());
        }
        userRepository.save(mapUserDTOToEntity(userDTO));
        loadUserByUsername(userDTO.getUserName());
        return true;
    }

    public boolean deleteUser(Integer userId) {
        if (userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }


    //    public List<UserEntity> usergtList(Integer idMin) {
//        return em.createQuery("SELECT u FROM user u WHERE u.id > :paramId", User.class)
//                .setParameter("paramId", idMin).getResultList();
//    }
    private boolean checkIfUserExist(String userName) {
        return userRepository.findByUserName(userName).isPresent();
    }

    private UserEntity mapUserDTOToEntity(UserDTO userDTO) {
        return UserEntity.builder()
                .userName(userDTO.getUserName())
                .password(userDTO.getPassword())
                .isActive(true)
                .phoneNumber(userDTO.getPhoneNumber())
                .roles("ROLE_USER")
                .build();
    }
}
