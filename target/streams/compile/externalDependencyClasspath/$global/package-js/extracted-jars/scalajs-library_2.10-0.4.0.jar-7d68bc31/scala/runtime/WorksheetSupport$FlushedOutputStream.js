/** @constructor */
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream = (function() {
  ScalaJS.c.java_io_OutputStream.call(this);
  this.out$2 = null;
  this.lastFlush$2 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.col$2 = 0
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype = new ScalaJS.inheritable.java_io_OutputStream();
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.constructor = ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream;
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.flushInterval__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(639872, 7, 0)
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.width__I = (function() {
  return 80
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.tabInc__I = (function() {
  return 8
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.lastFlush__p2__J = (function() {
  return this.lastFlush$2
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.lastFlush$und$eq__p2__J__V = (function(x$1) {
  this.lastFlush$2 = x$1
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.col__p2__I = (function() {
  return this.col$2
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.col$und$eq__p2__I__V = (function(x$1) {
  this.col$2 = x$1
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.write__AB__I__I__V = (function(b, off, len) {
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(off), ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I((off + len)), b.underlying.length)).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, b$1) {
    return (function(idx) {
      idx = ScalaJS.uI(idx);
      arg$outer.writeOne__I__V(b$1.underlying[idx]);
      return ScalaJS.bV(undefined)
    })
  })(this, b)));
  this.flush__V()
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.write__I__V = (function(c) {
  this.writeOne__I__V(c);
  this.flush__V()
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.flush__V = (function() {
  var current = ScalaJS.modules.java_lang_System().nanoTime__J();
  if (current.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(this.lastFlush__p2__J()).$$greater$eq__Lscala_scalajs_runtime_Long__Z(this.flushInterval__J())) {
    this.out$2.flush__V();
    this.lastFlush$und$eq__p2__J__V(current)
  }
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.writeOne__I__V = (function(c) {
  if ((this.col__p2__I() < 0)) {
    this.col$und$eq__p2__I__V(0);
    this.write__AB__V(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__getBytes__Lscala_scalajs_runtime_RuntimeString__AB((ScalaJS.bI(ScalaJS.modules.scala_runtime_WorksheetSupport().scala$runtime$WorksheetSupport$$currentOffset__I()) + " ")))
  };
  this.out$2.write__I__V(c);
  if ((c === 10)) {
    var jsx$1 = -1
  } else {
    if ((c === 9)) {
      var jsx$1 = ((((this.col__p2__I() / this.tabInc__I()) | 0) * this.tabInc__I()) + this.tabInc__I())
    } else {
      var jsx$1 = (this.col__p2__I() + 1)
    }
  };
  this.col$und$eq__p2__I__V(jsx$1);
  if ((this.col__p2__I() >= this.width__I())) {
    this.writeOne__I__V(10)
  }
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.ensureNewLine__V = (function() {
  if ((this.col__p2__I() > 0)) {
    this.writeOne__I__V(10)
  }
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.init___Ljava_io_OutputStream = (function(out) {
  this.out$2 = out;
  ScalaJS.c.java_io_OutputStream.prototype.init___.call(this);
  this.lastFlush$2 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0);
  this.col$2 = -1;
  return this
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.ensureNewLine__ = (function() {
  return ScalaJS.bV(this.ensureNewLine__V())
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.writeOne__I__ = (function(c) {
  return ScalaJS.bV(this.writeOne__I__V(c))
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.tabInc__ = (function() {
  return ScalaJS.bI(this.tabInc__I())
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.width__ = (function() {
  return ScalaJS.bI(this.width__I())
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.flushInterval__ = (function() {
  return ScalaJS.bJ(this.flushInterval__J())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_WorksheetSupport$FlushedOutputStream = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype = ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype;
ScalaJS.is.scala_runtime_WorksheetSupport$FlushedOutputStream = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_WorksheetSupport$FlushedOutputStream)))
});
ScalaJS.as.scala_runtime_WorksheetSupport$FlushedOutputStream = (function(obj) {
  if ((ScalaJS.is.scala_runtime_WorksheetSupport$FlushedOutputStream(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.WorksheetSupport$FlushedOutputStream")
  }
});
ScalaJS.isArrayOf.scala_runtime_WorksheetSupport$FlushedOutputStream = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_WorksheetSupport$FlushedOutputStream)))
});
ScalaJS.asArrayOf.scala_runtime_WorksheetSupport$FlushedOutputStream = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_WorksheetSupport$FlushedOutputStream(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.WorksheetSupport$FlushedOutputStream;", depth)
  }
});
ScalaJS.data.scala_runtime_WorksheetSupport$FlushedOutputStream = new ScalaJS.ClassTypeData({
  scala_runtime_WorksheetSupport$FlushedOutputStream: 0
}, false, "scala.runtime.WorksheetSupport$FlushedOutputStream", ScalaJS.data.java_io_OutputStream, {
  scala_runtime_WorksheetSupport$FlushedOutputStream: 1,
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_AutoCloseable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_WorksheetSupport$FlushedOutputStream.prototype.$classData = ScalaJS.data.scala_runtime_WorksheetSupport$FlushedOutputStream;
//@ sourceMappingURL=WorksheetSupport$FlushedOutputStream.js.map
