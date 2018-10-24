require 'pg'

class Thermostat

  def self.db_connection
    @connection ||= PG.connect(dbname: 'thermostat')
  end

  def self.temp
    result = self.db_connection.exec('SELECT temperature FROM thermostat_state;')
    return result[0]['temperature']
  end

  def self.temp=(new_temp)
    self.db_connection.exec("UPDATE thermostat_state SET temperature=#{new_temp};")
  end

  def self.psm
    result = self.db_connection.exec('SELECT psm FROM thermostat_state;')
    return result[0]['psm']
  end

  def self.psm=(new_psm)
    self.db_connection.exec("UPDATE thermostat_state SET psm=#{new_psm};")
  end
end
