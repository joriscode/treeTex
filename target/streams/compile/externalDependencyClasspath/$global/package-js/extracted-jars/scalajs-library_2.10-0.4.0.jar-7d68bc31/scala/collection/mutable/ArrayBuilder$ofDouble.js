/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuilder.call(this);
  this.elems$2 = null;
  this.capacity$2 = 0;
  this.size$2 = 0
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype = new ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder();
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble;
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.elems__p2__AD = (function() {
  return this.elems$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.elems$und$eq__p2__AD__V = (function(x$1) {
  this.elems$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.capacity__p2__I = (function() {
  return this.capacity$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.capacity$und$eq__p2__I__V = (function(x$1) {
  this.capacity$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.size__p2__I = (function() {
  return this.size$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.size$und$eq__p2__I__V = (function(x$1) {
  this.size$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.mkArray__p2__I__AD = (function(size) {
  var newelems = ScalaJS.newArrayObject(ScalaJS.data.scala_Double.getArrayOf(), [size]);
  if ((this.size__p2__I() > 0)) {
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__p2__AD(), 0, newelems, 0, this.size__p2__I())
  };
  return newelems
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.resize__p2__I__V = (function(size) {
  this.elems$und$eq__p2__AD__V(this.mkArray__p2__I__AD(size));
  this.capacity$und$eq__p2__I__V(size)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.sizeHint__I__V = (function(size) {
  if ((this.capacity__p2__I() < size)) {
    this.resize__p2__I__V(size)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.ensureSize__p2__I__V = (function(size) {
  if (((this.capacity__p2__I() < size) || (this.capacity__p2__I() === 0))) {
    if ((this.capacity__p2__I() === 0)) {
      var newsize = 16
    } else {
      var newsize = (this.capacity__p2__I() * 2)
    };
    while ((newsize < size)) {
      newsize = (newsize * 2)
    };
    this.resize__p2__I__V(newsize)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.$$plus$eq__D__Lscala_collection_mutable_ArrayBuilder$ofDouble = (function(elem) {
  this.ensureSize__p2__I__V((this.size__p2__I() + 1));
  this.elems__p2__AD().underlying[this.size__p2__I()] = elem;
  this.size$und$eq__p2__I__V((this.size__p2__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuilder$ofDouble = (function(xs) {
  var x1 = xs;
  if (ScalaJS.is.scala_collection_mutable_WrappedArray$ofDouble(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_WrappedArray$ofDouble(x1);
    this.ensureSize__p2__I__V((this.size__p2__I() + x2.length__I()));
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(x2.array__AD(), 0, this.elems__p2__AD(), this.size__p2__I(), x2.length__I());
    this.size$und$eq__p2__I__V((this.size__p2__I() + x2.length__I()));
    return this
  };
  return ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofDouble(ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs))
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.clear__V = (function() {
  this.size$und$eq__p2__I__V(0)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.result__AD = (function() {
  if (((this.capacity__p2__I() !== 0) && (this.capacity__p2__I() === this.size__p2__I()))) {
    return this.elems__p2__AD()
  } else {
    return this.mkArray__p2__I__AD(this.size__p2__I())
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofDouble(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofDouble(x1);
    return ((this.size__p2__I() === x2.size__p2__I()) && (this.elems__p2__AD() === x2.elems__p2__AD()))
  };
  return false
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.toString__T = (function() {
  return "ArrayBuilder.ofDouble"
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.result__O = (function() {
  return this.result__AD()
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuilder$ofDouble(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__D__Lscala_collection_mutable_ArrayBuilder$ofDouble(ScalaJS.uD(elem))
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__D__Lscala_collection_mutable_ArrayBuilder$ofDouble(ScalaJS.uD(elem))
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuilder.prototype.init___.call(this);
  this.capacity$2 = 0;
  this.size$2 = 0;
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.$$plus$eq__D__ = (function(elem) {
  return this.$$plus$eq__D__Lscala_collection_mutable_ArrayBuilder$ofDouble(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$ofDouble = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$ofDouble.prototype = ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype;
ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofDouble = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayBuilder$ofDouble)))
});
ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofDouble = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofDouble(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayBuilder$ofDouble")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$ofDouble = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayBuilder$ofDouble)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayBuilder$ofDouble = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$ofDouble(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuilder$ofDouble;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayBuilder$ofDouble = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayBuilder$ofDouble: 0
}, false, "scala.collection.mutable.ArrayBuilder$ofDouble", ScalaJS.data.scala_collection_mutable_ArrayBuilder, {
  scala_collection_mutable_ArrayBuilder$ofDouble: 1,
  scala_collection_mutable_ArrayBuilder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayBuilder$ofDouble;
//@ sourceMappingURL=ArrayBuilder$ofDouble.js.map
