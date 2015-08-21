class NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  def new
  end

  def create
    p "*"*80
    @note = Note.create(body: params[:body])
    render json: @note
  end

  def destroy
  end


end
