/** @constructor */
ScalaJS.c.scala_Enumeration$Value = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$Enumeration$$outerEnum$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_Enumeration$Value.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Enumeration$Value.prototype.constructor = ScalaJS.c.scala_Enumeration$Value;
ScalaJS.c.scala_Enumeration$Value.prototype.$$less__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$greater__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$less$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$greater$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_Enumeration$Value.prototype.compareTo__O__I = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__compareTo__Lscala_math_Ordered__O__I(this, that)
});
ScalaJS.c.scala_Enumeration$Value.prototype.scala$Enumeration$$outerEnum__Lscala_Enumeration = (function() {
  return this.scala$Enumeration$$outerEnum$1
});
ScalaJS.c.scala_Enumeration$Value.prototype.compare__Lscala_Enumeration$Value__I = (function(that) {
  if ((this.id__I() < that.id__I())) {
    return -1
  } else {
    if ((this.id__I() === that.id__I())) {
      return 0
    } else {
      return 1
    }
  }
});
ScalaJS.c.scala_Enumeration$Value.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_Enumeration$Value(x1)) {
    var x2 = ScalaJS.as.scala_Enumeration$Value(x1);
    return ((this.scala$Enumeration$$outerEnum__Lscala_Enumeration() === x2.scala$Enumeration$$outerEnum__Lscala_Enumeration()) && (this.id__I() === x2.id__I()))
  };
  return false
});
ScalaJS.c.scala_Enumeration$Value.prototype.hashCode__I = (function() {
  return this.id__I()
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$plus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet = (function(v) {
  return this.scala$Enumeration$Value$$$outer__Lscala_Enumeration().ValueSet__Lscala_Enumeration$ValueSet$().apply__Lscala_collection_Seq__Lscala_Enumeration$ValueSet(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Enumeration$Value.getArrayOf(), [this, v]), 1)))
});
ScalaJS.c.scala_Enumeration$Value.prototype.scala$Enumeration$Value$$$outer__Lscala_Enumeration = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_Enumeration$Value.prototype.compare__O__I = (function(that) {
  return this.compare__Lscala_Enumeration$Value__I(ScalaJS.as.scala_Enumeration$Value(that))
});
ScalaJS.c.scala_Enumeration$Value.prototype.init___Lscala_Enumeration = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_Ordered$class__$init$__Lscala_math_Ordered__V(this);
  this.scala$Enumeration$$outerEnum$1 = $$outer;
  return this
});
ScalaJS.c.scala_Enumeration$Value.prototype.compareTo__O__ = (function(that) {
  return ScalaJS.bI(this.compareTo__O__I(that))
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$greater$eq__O__ = (function(that$2) {
  return ScalaJS.bZ(this.$$greater$eq__O__Z(that$2))
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$less$eq__O__ = (function(that$3) {
  return ScalaJS.bZ(this.$$less$eq__O__Z(that$3))
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$greater__O__ = (function(that$4) {
  return ScalaJS.bZ(this.$$greater__O__Z(that$4))
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$less__O__ = (function(that$5) {
  return ScalaJS.bZ(this.$$less__O__Z(that$5))
});
ScalaJS.c.scala_Enumeration$Value.prototype.scala$Enumeration$Value$$$outer__ = (function() {
  return this.scala$Enumeration$Value$$$outer__Lscala_Enumeration()
});
ScalaJS.c.scala_Enumeration$Value.prototype.scala$Enumeration$$outerEnum__ = (function() {
  return this.scala$Enumeration$$outerEnum__Lscala_Enumeration()
});
ScalaJS.c.scala_Enumeration$Value.prototype.$$plus__Lscala_Enumeration$Value__ = (function(v) {
  return this.$$plus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(v)
});
ScalaJS.c.scala_Enumeration$Value.prototype.compare__Lscala_Enumeration$Value__ = (function(that$6) {
  return ScalaJS.bI(this.compare__Lscala_Enumeration$Value__I(that$6))
});
ScalaJS.c.scala_Enumeration$Value.prototype.id__ = (function() {
  return ScalaJS.bI(this.id__I())
});
ScalaJS.c.scala_Enumeration$Value.prototype.compare__O__ = (function(that$7) {
  return ScalaJS.bI(this.compare__O__I(that$7))
});
/** @constructor */
ScalaJS.inheritable.scala_Enumeration$Value = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Enumeration$Value.prototype = ScalaJS.c.scala_Enumeration$Value.prototype;
ScalaJS.is.scala_Enumeration$Value = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Enumeration$Value)))
});
ScalaJS.as.scala_Enumeration$Value = (function(obj) {
  if ((ScalaJS.is.scala_Enumeration$Value(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Enumeration$Value")
  }
});
ScalaJS.isArrayOf.scala_Enumeration$Value = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Enumeration$Value)))
});
ScalaJS.asArrayOf.scala_Enumeration$Value = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Enumeration$Value(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Enumeration$Value;", depth)
  }
});
ScalaJS.data.scala_Enumeration$Value = new ScalaJS.ClassTypeData({
  scala_Enumeration$Value: 0
}, false, "scala.Enumeration$Value", ScalaJS.data.java_lang_Object, {
  scala_Enumeration$Value: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Enumeration$Value.prototype.$classData = ScalaJS.data.scala_Enumeration$Value;
//@ sourceMappingURL=Enumeration$Value.js.map
