/** @constructor */
ScalaJS.c.scala_collection_immutable_Page = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.num$1 = 0;
  this.evidence$5$1 = null;
  this.PageSize$1 = 0;
  this.next$1 = null;
  this.later$1 = null;
  this.filled$1 = 0;
  this.isLast$1 = false;
  this.data$1 = null
});
ScalaJS.c.scala_collection_immutable_Page.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Page.prototype.constructor = ScalaJS.c.scala_collection_immutable_Page;
ScalaJS.c.scala_collection_immutable_Page.prototype.num__I = (function() {
  return this.num$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.PageSize__p1__I = (function() {
  return 4096
});
ScalaJS.c.scala_collection_immutable_Page.prototype.next__Lscala_collection_immutable_Page = (function() {
  return this.next$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.next$und$eq__Lscala_collection_immutable_Page__V = (function(x$1) {
  this.next$1 = x$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.later__Lscala_collection_immutable_Page = (function() {
  return this.later$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.later$und$eq__Lscala_collection_immutable_Page__V = (function(x$1) {
  this.later$1 = x$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.filled__I = (function() {
  return this.filled$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.filled$und$eq__I__V = (function(x$1) {
  this.filled$1 = x$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.isLast__Z = (function() {
  return this.isLast$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.isLast$und$eq__Z__V = (function(x$1) {
  this.isLast$1 = x$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.data__O = (function() {
  return this.data$1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.start__I = (function() {
  return (this.num__I() * 4096)
});
ScalaJS.c.scala_collection_immutable_Page.prototype.end__I = (function() {
  return (this.start__I() + this.filled__I())
});
ScalaJS.c.scala_collection_immutable_Page.prototype.latest__Lscala_collection_immutable_Page = (function() {
  if ((!ScalaJS.anyRefEqEq(this.later__Lscala_collection_immutable_Page().next__Lscala_collection_immutable_Page(), null))) {
    this.later$und$eq__Lscala_collection_immutable_Page__V(this.later__Lscala_collection_immutable_Page().next__Lscala_collection_immutable_Page().latest__Lscala_collection_immutable_Page())
  };
  return this.later__Lscala_collection_immutable_Page()
});
ScalaJS.c.scala_collection_immutable_Page.prototype.apply__I__O = (function(index) {
  if (((index < this.start__I()) || ((index - this.start__I()) >= this.filled__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(index)))
  };
  return ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(this.data__O(), (index - this.start__I()))
});
ScalaJS.c.scala_collection_immutable_Page.prototype.addMore__Lscala_Function3__Lscala_collection_immutable_Page = (function(more) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((_$this.filled__I() === 4096)) {
      _$this.next$und$eq__Lscala_collection_immutable_Page__V(new ScalaJS.c.scala_collection_immutable_Page().init___I__Lscala_reflect_ClassTag((_$this.num__I() + 1), _$this.evidence$5$1));
      _$this = _$this.next__Lscala_collection_immutable_Page();
      continue tailCallLoop
    } else {
      var count = ScalaJS.uI(more.apply__O__O__O__O(_$this.data__O(), ScalaJS.bI(_$this.filled__I()), ScalaJS.bI((4096 - _$this.filled__I()))));
      if ((count < 0)) {
        _$this.isLast$und$eq__Z__V(true)
      } else {
        _$this.filled$und$eq__I__V((_$this.filled__I() + count))
      };
      return _$this
    }
  }
});
ScalaJS.c.scala_collection_immutable_Page.prototype.init___I__Lscala_reflect_ClassTag = (function(num, evidence$5) {
  this.num$1 = num;
  this.evidence$5$1 = evidence$5;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.next$1 = null;
  this.later$1 = this;
  this.filled$1 = 0;
  this.isLast$1 = false;
  this.data$1 = evidence$5.newArray__I__O(4096);
  return this
});
ScalaJS.c.scala_collection_immutable_Page.prototype.addMore__Lscala_Function3__ = (function(more) {
  return this.addMore__Lscala_Function3__Lscala_collection_immutable_Page(more)
});
ScalaJS.c.scala_collection_immutable_Page.prototype.apply__I__ = (function(index) {
  return this.apply__I__O(index)
});
ScalaJS.c.scala_collection_immutable_Page.prototype.latest__ = (function() {
  return this.latest__Lscala_collection_immutable_Page()
});
ScalaJS.c.scala_collection_immutable_Page.prototype.end__ = (function() {
  return ScalaJS.bI(this.end__I())
});
ScalaJS.c.scala_collection_immutable_Page.prototype.start__ = (function() {
  return ScalaJS.bI(this.start__I())
});
ScalaJS.c.scala_collection_immutable_Page.prototype.data__ = (function() {
  return this.data__O()
});
ScalaJS.c.scala_collection_immutable_Page.prototype.isLast$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.isLast$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_collection_immutable_Page.prototype.isLast__ = (function() {
  return ScalaJS.bZ(this.isLast__Z())
});
ScalaJS.c.scala_collection_immutable_Page.prototype.filled$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.filled$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_collection_immutable_Page.prototype.filled__ = (function() {
  return ScalaJS.bI(this.filled__I())
});
ScalaJS.c.scala_collection_immutable_Page.prototype.later$und$eq__Lscala_collection_immutable_Page__ = (function(x$1$3) {
  return ScalaJS.bV(this.later$und$eq__Lscala_collection_immutable_Page__V(x$1$3))
});
ScalaJS.c.scala_collection_immutable_Page.prototype.later__ = (function() {
  return this.later__Lscala_collection_immutable_Page()
});
ScalaJS.c.scala_collection_immutable_Page.prototype.next$und$eq__Lscala_collection_immutable_Page__ = (function(x$1$4) {
  return ScalaJS.bV(this.next$und$eq__Lscala_collection_immutable_Page__V(x$1$4))
});
ScalaJS.c.scala_collection_immutable_Page.prototype.next__ = (function() {
  return this.next__Lscala_collection_immutable_Page()
});
ScalaJS.c.scala_collection_immutable_Page.prototype.num__ = (function() {
  return ScalaJS.bI(this.num__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Page = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Page.prototype = ScalaJS.c.scala_collection_immutable_Page.prototype;
ScalaJS.is.scala_collection_immutable_Page = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Page)))
});
ScalaJS.as.scala_collection_immutable_Page = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Page(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Page")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Page = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Page)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Page = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Page(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Page;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Page = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Page: 0
}, false, "scala.collection.immutable.Page", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Page: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Page.prototype.$classData = ScalaJS.data.scala_collection_immutable_Page;
//@ sourceMappingURL=Page.js.map
