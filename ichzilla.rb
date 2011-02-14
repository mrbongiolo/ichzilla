require "rubygems"

require 'bundler'
Bundler.require

require "sinatra"
require "erb"

helpers do
  def select_tag(name, collection, *args)
    options = args.last.is_a?(Hash) ? args.last : { }
    options_for_select = ""
    options_for_select += "class=\"#{options[:class]}\"" if options[:class]
    result = "<select id=\"#{name.to_s.downcase}\" name=\"#{name.to_s}\" #{options_for_select} >\n"
    collection.each do |c|
      result += "<option value=\"#{c.to_s.downcase}\">#{c.to_s.capitalize}</option>\n"
    end
    result += "</select>\n"
  end
end

get '/' do 
  @classes = %w(warrior defender priest cleric
                enchanter sorcerer archer assassin
                life shadow rune
                templar attacker gunner)
  erb :ichzilla
end

post '/hp' do
  row_class = params[:row_class]
  lvl = params[:lvl].to_i
  con = params[:con].to_i
  dex = params[:dex].to_i
  str = params[:str].to_i
  base_hp = (150 + (25 * lvl) + ((con-20) * 0.15 * lvl) + ((dex-20) * 0.05 *lvl))
  row_class_hp = 0
  case row_class
    when 'warrior', 'attacker'
      row_class_hp = ((con - 20) * 0.35 * lvl)
    when 'defender', 'templar'
      row_class_hp = ((con - 20) * 0.4 * lvl)
    when 'assassin', 'archer', 'gunner', 'shadow'
      row_class_hp = ((str - 20) * 0.1 * lvl)
    when 'sorcerer', 'enchanter', 'rune'
      row_class_hp = ((dex - 20) * 0.3 * lvl)
    when 'priest', 'cleric'
      row_class_hp = ((con - 20) * 0.2 * lvl)
    when 'life'
      row_class_hp = ((dex - 20) * 0.2 * lvl)
    else
      #nothin
  end
  @total_hp = base_hp + row_class_hp
  erb :hp
end
