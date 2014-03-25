/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuilder.call(this);
  this.elems$2 = null;
  this.capacity$2 = 0;
  this.size$2 = 0
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype = new ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder();
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort;
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.elems__p2__AS = (function() {
  return this.elems$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.elems$und$eq__p2__AS__V = (function(x$1) {
  this.elems$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.capacity__p2__I = (function() {
  return this.capacity$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.capacity$und$eq__p2__I__V = (function(x$1) {
  this.capacity$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.size__p2__I = (function() {
  return this.size$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.size$und$eq__p2__I__V = (function(x$1) {
  this.size$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.mkArray__p2__I__AS = (function(size) {
  var newelems = ScalaJS.newArrayObject(ScalaJS.data.scala_Short.getArrayOf(), [size]);
  if ((this.size__p2__I() > 0)) {
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__p2__AS(), 0, newelems, 0, this.size__p2__I())
  };
  return newelems
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.resize__p2__I__V = (function(size) {
  this.elems$und$eq__p2__AS__V(this.mkArray__p2__I__AS(size));
  this.capacity$und$eq__p2__I__V(size)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.sizeHint__I__V = (function(size) {
  if ((this.capacity__p2__I() < size)) {
    this.resize__p2__I__V(size)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.ensureSize__p2__I__V = (function(size) {
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
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.$$plus$eq__S__Lscala_collection_mutable_ArrayBuilder$ofShort = (function(elem) {
  this.ensureSize__p2__I__V((this.size__p2__I() + 1));
  this.elems__p2__AS().underlying[this.size__p2__I()] = elem;
  this.size$und$eq__p2__I__V((this.size__p2__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuilder$ofShort = (function(xs) {
  var x1 = xs;
  if (ScalaJS.is.scala_collection_mutable_WrappedArray$ofShort(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_WrappedArray$ofShort(x1);
    this.ensureSize__p2__I__V((this.size__p2__I() + x2.length__I()));
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(x2.array__AS(), 0, this.elems__p2__AS(), this.size__p2__I(), x2.length__I());
    this.size$und$eq__p2__I__V((this.size__p2__I() + x2.length__I()));
    return this
  };
  return ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofShort(ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs))
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.clear__V = (function() {
  this.size$und$eq__p2__I__V(0)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.result__AS = (function() {
  if (((this.capacity__p2__I() !== 0) && (this.capacity__p2__I() === this.size__p2__I()))) {
    return this.elems__p2__AS()
  } else {
    return this.mkArray__p2__I__AS(this.size__p2__I())
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofShort(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofShort(x1);
    return ((this.size__p2__I() === x2.size__p2__I()) && (this.elems__p2__AS() === x2.elems__p2__AS()))
  };
  return false
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.toString__T = (function() {
  return "ArrayBuilder.ofShort"
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.result__O = (function() {
  return this.result__AS()
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuilder$ofShort(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__S__Lscala_collection_mutable_ArrayBuilder$ofShort(ScalaJS.uS(elem))
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__S__Lscala_collection_mutable_ArrayBuilder$ofShort(ScalaJS.uS(elem))
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuilder.prototype.init___.call(this);
  this.capacity$2 = 0;
  this.size$2 = 0;
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.$$plus$eq__S__ = (function(elem) {
  return this.$$plus$eq__S__Lscala_collection_mutable_ArrayBuilder$ofShort(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$ofShort = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$ofShort.prototype = ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype;
ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofShort = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayBuilder$ofShort)))
});
ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofShort = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofShort(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayBuilder$ofShort")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$ofShort = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayBuilder$ofShort)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayBuilder$ofShort = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$ofShort(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuilder$ofShort;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayBuilder$ofShort = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayBuilder$ofShort: 0
}, false, "scala.collection.mutable.ArrayBuilder$ofShort", ScalaJS.data.scala_collection_mutable_ArrayBuilder, {
  scala_collection_mutable_ArrayBuilder$ofShort: 1,
  scala_collection_mutable_ArrayBuilder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayBuilder$ofShort;
//@ sourceMappingURL=ArrayBuilder$ofShort.js.map
