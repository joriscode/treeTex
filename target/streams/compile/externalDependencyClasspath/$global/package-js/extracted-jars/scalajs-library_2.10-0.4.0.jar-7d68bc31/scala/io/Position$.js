/** @constructor */
ScalaJS.c.scala_io_Position$ = (function() {
  ScalaJS.c.scala_io_Position.call(this);
  this.NOPOS$2 = 0;
  this.FIRSTPOS$2 = 0
});
ScalaJS.c.scala_io_Position$.prototype = new ScalaJS.inheritable.scala_io_Position();
ScalaJS.c.scala_io_Position$.prototype.constructor = ScalaJS.c.scala_io_Position$;
ScalaJS.c.scala_io_Position$.prototype.NOPOS__I = (function() {
  return 0
});
ScalaJS.c.scala_io_Position$.prototype.FIRSTPOS__I = (function() {
  return this.FIRSTPOS$2
});
ScalaJS.c.scala_io_Position$.prototype.checkInput__I__I__V = (function(line, column) {
  if ((line < 0)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((ScalaJS.bI(line) + " < 0"))
  };
  if (((line === 0) && (column !== 0))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(((("" + (ScalaJS.bI(line) + ",")) + ScalaJS.bI(column)) + " not allowed"))
  };
  if ((column < 0)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(((("" + (ScalaJS.bI(line) + ",")) + ScalaJS.bI(column)) + " not allowed"))
  }
});
ScalaJS.c.scala_io_Position$.prototype.init___ = (function() {
  ScalaJS.c.scala_io_Position.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_io_Position = this;
  this.FIRSTPOS$2 = this.encode__I__I__I(1, 1);
  return this
});
ScalaJS.c.scala_io_Position$.prototype.FIRSTPOS__ = (function() {
  return ScalaJS.bI(this.FIRSTPOS__I())
});
ScalaJS.c.scala_io_Position$.prototype.NOPOS__ = (function() {
  return ScalaJS.bI(this.NOPOS__I())
});
/** @constructor */
ScalaJS.inheritable.scala_io_Position$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Position$.prototype = ScalaJS.c.scala_io_Position$.prototype;
ScalaJS.is.scala_io_Position$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Position$)))
});
ScalaJS.as.scala_io_Position$ = (function(obj) {
  if ((ScalaJS.is.scala_io_Position$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Position")
  }
});
ScalaJS.isArrayOf.scala_io_Position$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Position$)))
});
ScalaJS.asArrayOf.scala_io_Position$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Position$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Position;", depth)
  }
});
ScalaJS.data.scala_io_Position$ = new ScalaJS.ClassTypeData({
  scala_io_Position$: 0
}, false, "scala.io.Position$", ScalaJS.data.scala_io_Position, {
  scala_io_Position$: 1,
  scala_io_Position: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Position$.prototype.$classData = ScalaJS.data.scala_io_Position$;
ScalaJS.moduleInstances.scala_io_Position = undefined;
ScalaJS.modules.scala_io_Position = (function() {
  if ((!ScalaJS.moduleInstances.scala_io_Position)) {
    ScalaJS.moduleInstances.scala_io_Position = new ScalaJS.c.scala_io_Position$().init___()
  };
  return ScalaJS.moduleInstances.scala_io_Position
});
//@ sourceMappingURL=Position$.js.map
