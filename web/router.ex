defmodule Chatty.Router do
  use Chatty.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Chatty do
    pipe_through :browser

    get "/*path", PageController, :index
  end

  scope "/api/", Chatty do
    pipe_through :api
  end
end
