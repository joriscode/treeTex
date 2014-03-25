/** @constructor */
ScalaJS.c.scala_math_BigDecimal$RoundingMode$ = (function() {
  ScalaJS.c.scala_Enumeration.call(this);
  this.UP$2 = null;
  this.DOWN$2 = null;
  this.CEILING$2 = null;
  this.FLOOR$2 = null;
  this.HALF$undUP$2 = null;
  this.HALF$undDOWN$2 = null;
  this.HALF$undEVEN$2 = null;
  this.UNNECESSARY$2 = null
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype = new ScalaJS.inheritable.scala_Enumeration();
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.constructor = ScalaJS.c.scala_math_BigDecimal$RoundingMode$;
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.UP__Lscala_Enumeration$Value = (function() {
  return this.UP$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.DOWN__Lscala_Enumeration$Value = (function() {
  return this.DOWN$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.CEILING__Lscala_Enumeration$Value = (function() {
  return this.CEILING$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.FLOOR__Lscala_Enumeration$Value = (function() {
  return this.FLOOR$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.HALF$undUP__Lscala_Enumeration$Value = (function() {
  return this.HALF$undUP$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.HALF$undDOWN__Lscala_Enumeration$Value = (function() {
  return this.HALF$undDOWN$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.HALF$undEVEN__Lscala_Enumeration$Value = (function() {
  return this.HALF$undEVEN$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.UNNECESSARY__Lscala_Enumeration$Value = (function() {
  return this.UNNECESSARY$2
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.init___ = (function() {
  ScalaJS.c.scala_Enumeration.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_BigDecimal$RoundingMode = this;
  this.UP$2 = this.Value__T__Lscala_Enumeration$Value("UP");
  this.DOWN$2 = this.Value__T__Lscala_Enumeration$Value("DOWN");
  this.CEILING$2 = this.Value__T__Lscala_Enumeration$Value("CEILING");
  this.FLOOR$2 = this.Value__T__Lscala_Enumeration$Value("FLOOR");
  this.HALF$undUP$2 = this.Value__T__Lscala_Enumeration$Value("HALF_UP");
  this.HALF$undDOWN$2 = this.Value__T__Lscala_Enumeration$Value("HALF_DOWN");
  this.HALF$undEVEN$2 = this.Value__T__Lscala_Enumeration$Value("HALF_EVEN");
  this.UNNECESSARY$2 = this.Value__T__Lscala_Enumeration$Value("UNNECESSARY");
  return this
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.UNNECESSARY__ = (function() {
  return this.UNNECESSARY__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.HALF$undEVEN__ = (function() {
  return this.HALF$undEVEN__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.HALF$undDOWN__ = (function() {
  return this.HALF$undDOWN__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.HALF$undUP__ = (function() {
  return this.HALF$undUP__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.FLOOR__ = (function() {
  return this.FLOOR__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.CEILING__ = (function() {
  return this.CEILING__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.DOWN__ = (function() {
  return this.DOWN__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.UP__ = (function() {
  return this.UP__Lscala_Enumeration$Value()
});
/** @constructor */
ScalaJS.inheritable.scala_math_BigDecimal$RoundingMode$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_BigDecimal$RoundingMode$.prototype = ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype;
ScalaJS.is.scala_math_BigDecimal$RoundingMode$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_BigDecimal$RoundingMode$)))
});
ScalaJS.as.scala_math_BigDecimal$RoundingMode$ = (function(obj) {
  if ((ScalaJS.is.scala_math_BigDecimal$RoundingMode$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.BigDecimal$RoundingMode")
  }
});
ScalaJS.isArrayOf.scala_math_BigDecimal$RoundingMode$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_BigDecimal$RoundingMode$)))
});
ScalaJS.asArrayOf.scala_math_BigDecimal$RoundingMode$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_BigDecimal$RoundingMode$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.BigDecimal$RoundingMode;", depth)
  }
});
ScalaJS.data.scala_math_BigDecimal$RoundingMode$ = new ScalaJS.ClassTypeData({
  scala_math_BigDecimal$RoundingMode$: 0
}, false, "scala.math.BigDecimal$RoundingMode$", ScalaJS.data.scala_Enumeration, {
  scala_math_BigDecimal$RoundingMode$: 1,
  scala_Enumeration: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_BigDecimal$RoundingMode$.prototype.$classData = ScalaJS.data.scala_math_BigDecimal$RoundingMode$;
ScalaJS.moduleInstances.scala_math_BigDecimal$RoundingMode = undefined;
ScalaJS.modules.scala_math_BigDecimal$RoundingMode = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_BigDecimal$RoundingMode)) {
    ScalaJS.moduleInstances.scala_math_BigDecimal$RoundingMode = new ScalaJS.c.scala_math_BigDecimal$RoundingMode$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_BigDecimal$RoundingMode
});
//@ sourceMappingURL=BigDecimal$RoundingMode$.js.map
