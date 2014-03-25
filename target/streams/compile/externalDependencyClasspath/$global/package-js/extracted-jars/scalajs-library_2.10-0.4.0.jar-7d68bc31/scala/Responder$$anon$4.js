/** @constructor */
ScalaJS.c.scala_Responder$$anon$4 = (function() {
  ScalaJS.c.scala_Responder.call(this);
  this.$$outer$2 = null;
  this.p$1$f = null
});
ScalaJS.c.scala_Responder$$anon$4.prototype = new ScalaJS.inheritable.scala_Responder();
ScalaJS.c.scala_Responder$$anon$4.prototype.constructor = ScalaJS.c.scala_Responder$$anon$4;
ScalaJS.c.scala_Responder$$anon$4.prototype.respond__Lscala_Function1__V = (function(k) {
  this.$$outer$2.respond__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, k$3) {
    return (function(x) {
      if (ScalaJS.uZ(arg$outer.p$1$f.apply__O__O(x))) {
        k$3.apply__O__O(x)
      };
      return ScalaJS.bV(undefined)
    })
  })(this, k)))
});
ScalaJS.c.scala_Responder$$anon$4.prototype.init___Lscala_Responder__Lscala_Function1 = (function($$outer, p$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.p$1$f = p$1;
  ScalaJS.c.scala_Responder.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Responder$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Responder$$anon$4.prototype = ScalaJS.c.scala_Responder$$anon$4.prototype;
ScalaJS.is.scala_Responder$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Responder$$anon$4)))
});
ScalaJS.as.scala_Responder$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_Responder$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Responder$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_Responder$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Responder$$anon$4)))
});
ScalaJS.asArrayOf.scala_Responder$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Responder$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Responder$$anon$4;", depth)
  }
});
ScalaJS.data.scala_Responder$$anon$4 = new ScalaJS.ClassTypeData({
  scala_Responder$$anon$4: 0
}, false, "scala.Responder$$anon$4", ScalaJS.data.scala_Responder, {
  scala_Responder$$anon$4: 1,
  scala_Responder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Responder$$anon$4.prototype.$classData = ScalaJS.data.scala_Responder$$anon$4;
//@ sourceMappingURL=Responder$$anon$4.js.map
