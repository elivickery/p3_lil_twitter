class CreateTweets < ActiveRecord::Migration[4.2]
  def change
    create_table :tweets do |column|
      column.string :content, :username, :handle, :avatar_url
      column.timestamps
    end
  end
end
