/**
 * jspsych-survey-text
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

(function($) {
  jsPsych['survey-text-german'] = (function() {

    var plugin = {};

    plugin.create = function(params) {

      //params = jsPsych.pluginAPI.enforceArray(params, ['data']);

      var trials = [];
      for (var i = 0; i < params.questions.length; i++) {
        var rows = [], cols = [];
        if(typeof params.rows == 'undefined' || typeof params.columns == 'undefined'){
          for(var j = 0; j < params.questions[i].length; j++){
            cols.push(40);
            rows.push(1);
          }
        }

        trials.push({
          preamble: typeof params.preamble == 'undefined' ? "" : params.preamble[i],
          questions: params.questions[i],
          rows: typeof params.rows == 'undefined' ? rows : params.rows[i],
          columns: typeof params.columns == 'undefined' ? cols : params.columns[i]
        });
      }
      return trials;
    };

    plugin.trial = function(display_element, trial) {

      // if any trial variables are functions
      // this evaluates the function and replaces
      // it with the output of the function
      trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

      // show preamble text
      display_element.append($('<div>', {
        "id": 'jspsych-survey-text-preamble',
        "class": 'jspsych-survey-text-preamble'
      }));

      $('#jspsych-survey-text-preamble').html(trial.preamble);

      // add questions
      for (var i = 0; i < trial.questions.length; i++) {
        // create div
        display_element.append($('<div>', {
          "id": 'jspsych-survey-text-' + i,
          "class": 'jspsych-survey-text-question'
        }));

        // add question text
        $("#jspsych-survey-text-" + i).append('<p class="jspsych-survey-text">' + trial.questions[i] + '</p>');

        // add text box
        $("#jspsych-survey-text-" + i).append('<textarea name="#jspsych-survey-text-response-' + i + '" cols="'+trial.columns[i]+'" rows="'+trial.rows[i]+'"></textarea>');
      }

      // add submit button
      display_element.append($('<button>', {
        'id': 'jspsych-survey-text-next',
        'class': 'jspsych-survey-text'
      }));
      $("#jspsych-survey-text-next").html('Bestätigen');
      $("#jspsych-survey-text-next").click(function() {
        // measure response time
        var endTime = (new Date()).getTime();
        var response_time = endTime - startTime;






        // create object to hold responses
        var question_data = {};
        var question_data2 = {};


        $("div.jspsych-survey-text-question").each(function(index) {
          var id = "Q" + index;
          var val = $(this).children('textarea').val();
          var obje = {};
          obje[id] = val;
          if (index === 0) {
          $.extend(question_data, obje);} // extend merges the contents of two objects together into the first object
          else if (index === 1) {
          $.extend(question_data2, obje);} // extend merges the contents of two objects together into the first object
          //$.extend(question_data, obje);
        });

        // save data
        jsPsych.data.write({
          "rt": response_time,
          "ratingTask1": JSON.stringify(question_data), // modified April 5, 2016 to match my database labels
          "ratingTask2": JSON.stringify(question_data2)
          //"responses": JSON.stringify(question_data)
        });



        display_element.html('');

        // next trial
        jsPsych.finishTrial();
      });

      var startTime = (new Date()).getTime();
    };

    return plugin;
  })();
})(jQuery);
