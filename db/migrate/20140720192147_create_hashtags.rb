class CreateHashtags < ActiveRecord::Migration[4.2]
  def change
    create_table :hashtags do |column|
      column.string :name
    end
  end
end
