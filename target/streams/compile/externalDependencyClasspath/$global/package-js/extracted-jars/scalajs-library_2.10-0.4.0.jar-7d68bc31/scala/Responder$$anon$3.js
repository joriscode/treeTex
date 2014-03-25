/** @constructor */
ScalaJS.c.scala_Responder$$anon$3 = (function() {
  ScalaJS.c.scala_Responder.call(this);
  this.$$outer$2 = null;
  this.f$2$f = null
});
ScalaJS.c.scala_Responder$$anon$3.prototype = new ScalaJS.inheritable.scala_Responder();
ScalaJS.c.scala_Responder$$anon$3.prototype.constructor = ScalaJS.c.scala_Responder$$anon$3;
ScalaJS.c.scala_Responder$$anon$3.prototype.respond__Lscala_Function1__V = (function(k) {
  this.$$outer$2.respond__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, k$2) {
    return (function(x) {
      k$2.apply__O__O(arg$outer.f$2$f.apply__O__O(x));
      return ScalaJS.bV(undefined)
    })
  })(this, k)))
});
ScalaJS.c.scala_Responder$$anon$3.prototype.init___Lscala_Responder__Lscala_Function1 = (function($$outer, f$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.f$2$f = f$2;
  ScalaJS.c.scala_Responder.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Responder$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Responder$$anon$3.prototype = ScalaJS.c.scala_Responder$$anon$3.prototype;
ScalaJS.is.scala_Responder$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Responder$$anon$3)))
});
ScalaJS.as.scala_Responder$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_Responder$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Responder$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_Responder$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Responder$$anon$3)))
});
ScalaJS.asArrayOf.scala_Responder$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Responder$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Responder$$anon$3;", depth)
  }
});
ScalaJS.data.scala_Responder$$anon$3 = new ScalaJS.ClassTypeData({
  scala_Responder$$anon$3: 0
}, false, "scala.Responder$$anon$3", ScalaJS.data.scala_Responder, {
  scala_Responder$$anon$3: 1,
  scala_Responder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Responder$$anon$3.prototype.$classData = ScalaJS.data.scala_Responder$$anon$3;
//@ sourceMappingURL=Responder$$anon$3.js.map
