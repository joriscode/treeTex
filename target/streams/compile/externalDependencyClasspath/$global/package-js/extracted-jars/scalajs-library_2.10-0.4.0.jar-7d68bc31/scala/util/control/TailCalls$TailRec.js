/** @constructor */
ScalaJS.c.scala_util_control_TailCalls$TailRec = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype.constructor = ScalaJS.c.scala_util_control_TailCalls$TailRec;
ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype.result__O = (function() {
  return this.loop$1__p1__Lscala_util_control_TailCalls$TailRec__O(this)
});
ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype.loop$1__p1__Lscala_util_control_TailCalls$TailRec__O = (function(body) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = body;
    if (ScalaJS.is.scala_util_control_TailCalls$Call(x1)) {
      var x2 = ScalaJS.as.scala_util_control_TailCalls$Call(x1);
      var rest = x2.rest__Lscala_Function0();
      body = ScalaJS.as.scala_util_control_TailCalls$TailRec(rest.apply__O());
      continue tailCallLoop
    };
    if (ScalaJS.is.scala_util_control_TailCalls$Done(x1)) {
      var x3 = ScalaJS.as.scala_util_control_TailCalls$Done(x1);
      var result = x3.result__O();
      return result
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype.result__ = (function() {
  return this.result__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_TailCalls$TailRec = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_TailCalls$TailRec.prototype = ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype;
ScalaJS.is.scala_util_control_TailCalls$TailRec = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_TailCalls$TailRec)))
});
ScalaJS.as.scala_util_control_TailCalls$TailRec = (function(obj) {
  if ((ScalaJS.is.scala_util_control_TailCalls$TailRec(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.TailCalls$TailRec")
  }
});
ScalaJS.isArrayOf.scala_util_control_TailCalls$TailRec = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_TailCalls$TailRec)))
});
ScalaJS.asArrayOf.scala_util_control_TailCalls$TailRec = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_TailCalls$TailRec(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.TailCalls$TailRec;", depth)
  }
});
ScalaJS.data.scala_util_control_TailCalls$TailRec = new ScalaJS.ClassTypeData({
  scala_util_control_TailCalls$TailRec: 0
}, false, "scala.util.control.TailCalls$TailRec", ScalaJS.data.java_lang_Object, {
  scala_util_control_TailCalls$TailRec: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype.$classData = ScalaJS.data.scala_util_control_TailCalls$TailRec;
//@ sourceMappingURL=TailCalls$TailRec.js.map
