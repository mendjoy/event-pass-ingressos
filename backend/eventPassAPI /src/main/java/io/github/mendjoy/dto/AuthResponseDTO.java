package io.github.mendjoy.dto;

public class AuthResponseDTO {

    private String token;
    private String username;

    public AuthResponseDTO() {
    }

    public AuthResponseDTO(String token, String username) {
        this.token = token;
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
